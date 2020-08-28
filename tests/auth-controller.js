const expect = require("chai").expect;
const sinon = require("sinon");

const User = require("../sequelize/models/user");
const AuthController = require("../controllers/AuthController");
const bcrypt = require("bcrypt");

describe("Auth controller", () => {
    describe("Login", () => {
        it("throw error if query does not returns a user", (done) => {
            sinon.stub(User, "findAll");
            User.findAll.returns(null);

            const req = {
                body: {
                    email: "test",
                    password: "test",
                },
            };

            AuthController.login(req, {}, () => {})
                .then((result) => {
                    expect(result).to.be.an("error").to.have.property("statusCode", 500);
                    done();
                })
                .catch(done);

            User.findAll.restore();
        });

        it("throw error if passwords dont match", (done) => {
            sinon.stub(bcrypt, "compare");
            bcrypt.compare.returns(false);

            sinon.stub(User, "findAll");
            User.findAll.returns({ password: "xxx"});

            const req = {
                body: {
                    email: "test",
                    password: "test",
                },
            };

            AuthController.login(req, {}, () => {})
                .then((result) => {
                    expect(result).to.be.an("error").to.have.property("statusCode", 500);
                    done();
                })
                .catch(done);

            bcrypt.compare.restore();
            User.findAll.restore();
        });
    });
});
