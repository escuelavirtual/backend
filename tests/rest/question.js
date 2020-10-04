const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/index");
const { expect } = chai;

const User = require("../../src/models/user");
const Professor = require("../../src/models/professor");
const Category = require("../../src/models/category");
const Course = require("../../src/models/course");
const Module = require("../../src/models/module");
const Exam = require("../../src/models/exam");

chai.use(chaiHttp);

describe("Question Tests", () => {

    before(async() => {
        try {
            await User.create({ id: "1", firstname: "ana", lastname: "aa", email: "aaa@ddd.com", password: "sss" });
            await Category.create({ id: "1", name: "alto", slug: "1" });
            await Professor.create({ id: "1", userId: "1", valuation: "11" });
            await Course.create({ id: "1", professorId: "1", categoryId: "1", title: "alto", description: "ssss", isPrivate: "0", invitationCode: "adfsdfs" });
            await Module.create({ id: "1", courseId: "1", title: "safsd", description: "sdfs" });
            await Exam.create({ id: "1", moduleId: "1", name: "sdfs" });

        } catch (err) {
            return new Error("An error has ocurred");
        }
    });

    describe("Creation of OPEN Question", () => {

        it("should return an question created", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "id": 1,
                    "examId": 1,
                    "typeQuestionId": 1,
                    "code": "E1.q1.1",
                    "content": "What is Git?",
                    "minimum": 2,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("Should return an Error, when the tope exists and it is not necessary", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "examId": 1,
                    "typeQuestionId": 1,
                    "code": "E1.q1.2",
                    "content": "What does the method return Object.values()?",
                    "minimum": 2,
                    "tope": 100,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(400);
                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    done();
                });
        });

        it("Should return an Error, when examId is empty", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "typeQuestionId": 1,
                    "code": "E1.q1.3",
                    "content": "colores primarios",
                    "minimum": 2,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(400);
                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    done();
                });
        });

        it("Should return an Error, when examId and content exists in the base", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "examId": 1,
                    "typeQuestionId": 1,
                    "code": "E1.q1.4",
                    "content": "What is Git?",
                    "minimum": 2,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(500);
                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    done();
                });
        });
    });

    describe("Close question creation", () => {

        it("Should return an question created", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "id": 2,
                    "examId": 1,
                    "typeQuestionId": 2,
                    "code": "E1.q2.1",
                    "content": "What does the method return Object.values()?"
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Multi-choice question creation", () => {

        it("Should return an question created", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "id": 3,
                    "examId": 1,
                    "typeQuestionId": 3,
                    "code": "E1.q3.1",
                    "content": "What are the primary colors?"
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("Should return an Error, because there are no required parameters", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "examId": 1,
                    "typeQuestionId": 3,
                    "code": "E1.q3.2",
                    "content": "What is Git?",
                    "minimum": 2,
                    "tope": 100,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(400);
                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    done();
                });
        });

        it("Should return an Error, because examId is empty", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "typeQuestionId": 3,
                    "code": "E1.q3.3",
                    "content": "What is Git?",
                    "minimum": 2,
                    "tope": 100,
                    "length": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(400);
                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    done();
                });
        });
    });

    describe("Creation of NUMERICAL question", () => {

        it("should return an question created", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "id": 4,
                    "examId": 1,
                    "typeQuestionId": 4,
                    "code": "E1.q4.1",
                    "content": "Escriba el numero",
                    "minimum": 2,
                    "tope": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("Should return an Error, because tope is empty", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "examId": 1,
                    "typeQuestionId": 4,
                    "code": "E1.q4.2",
                    "content": "Otro numero"
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(400);
                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    done();
                });
        });

        it("Should return an Error, because the question exists in the exam", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
                    "examId": 1,
                    "typeQuestionId": 4,
                    "code": "E1.q4.3",
                    "content": "Escriba el numero",
                    "minimum": 2,
                    "tope": 100
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(500);
                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    done();
                });
        });
    });
});