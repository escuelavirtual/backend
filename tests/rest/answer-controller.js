const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../../src/index");

const { expect } = chai;

chai.use(chaiHttp);

describe("Answer tests", () => {

    describe("Create a answer of Exam", () => {
        it("should return a answer created", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r11",
                    "question_id": 3,
                    "content": "naranja_99",
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);
                    //console.log(res)

                    expect(res).to.have.status(200);
                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    done();
                });
        })

        it("should return a answer created, if content is empty and type of question is open", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r11",
                    "question_id": 1,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);
                    //console.log(res)

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);

                    done();

                });
        })

        it("should return an error if content is empty and type of question is not open", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r12",
                    "question_id": 3,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);
                    //console.log(res)

                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    expect(res).to.have.status(500);

                    done();

                });
        })

        it("should return an error if question_id is empty", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r11",
                    "content": "naranja",
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);
                    //console.log(res)

                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    expect(res).to.have.status(400); // 404

                    done();
                });
        });
    });


})