const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/index");

const User = require("../../src/models/user");
const Professor = require("../../src/models/professor");
const Category = require("../../src/models/category");
const Course = require("../../src/models/course");
const Module = require("../../src/models/module");
const Type_question = require("../../src/models/type_question.js");

const { expect } = chai;

chai.use(chaiHttp);
before(async() => {
    try {
        await Type_question.create({ id: 1, type_question: 1, content: "abierta" });
        await Type_question.create({ id: 2, type_question: 2, content: "cerrada" });
        await Type_question.create({ id: 3, type_question: 3, content: "multiple" });
        await Type_question.create({ id: 4, type_question: 4, content: "numerica" });
        await User.create({ id: "1", firstname: "ana", lastname: "aa", email: "aaa@ddd.com", password: "sss" });
        await Category.create({ id: "1", name: "alto", slug: "1" });
        await Professor.create({ id: "1", userId: "1", valuation: "11" });
        await Course.create({ id: "1", professorId: "1", categoryId: "1", title: "alto", description: "ssss", isPrivate: "0", invitationCode: "adfsdf677s" });
        await Module.create({ id: 1, courseId: 1, title: "safsd", description: "sdfs" });

    } catch (err) {
        return new Error("An error has ocurred");
    }
});



describe("Exam Test", () => {

    it("Should return an Exam Created", (done) => {

        chai.request(app)
            .post("/api/v1/exam")
            .send({
                "moduleId": "1",
                "type": 1,
                "name": "Introduction to Vue"
            })
            .end(function(err, res) {

                if (err) done(err);

                expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Should return an Error, when the exam name is empty", (done) => {

        chai.request(app)
            .post("/api/v1/exam")
            .send({
                "moduleId": "1",
                "type": 1
            })
            .end(function(err, res) {

                if (err) done(err);

                expect(res).to.have.status(400);
                expect(JSON.parse(res.text)).to.have.all.keys("errors");
                done();
            });
    });

    it("Should return an Error, when moduleId is empty", (done) => {

        chai.request(app)
            .post("/api/v1/exam")
            .send({
                "type": 1,
                "name": "Introduction to Ionic"
            })
            .end(function(err, res) {

                if (err) done(err);

                expect(res).to.have.status(400);
                expect(JSON.parse(res.text)).to.have.all.keys("errors");
                done();
            });
    });

    it("Should return an Error, when name and moduleId exists in the base", (done) => {

        chai.request(app)
            .post("/api/v1/exam")
            .send({
                "moduleId": "1",
                "type": 1,
                "name": "Introduction to Vue"
            })
            .end(function(err, res) {

                if (err) done(err);

                expect(res).to.have.status(500);
                expect(JSON.parse(res.text)).to.have.all.keys("err");
                done();
            });
    });
})