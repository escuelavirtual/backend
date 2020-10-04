const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/index");
const { expect } = chai;

const Type_question = require("../../src/models/type_question.js");
const Exam = require("../../src/models/exam");
const Question = require("../../src/models/question");


chai.use(chaiHttp);

describe("Question Tests", () => {

    before(async() => {
        try {
            await Type_question.create({ id: 1, type_question: 1, content: "abierta" });
            await Type_question.create({ id: 2, type_question: 2, content: "cerrada" });
            await Type_question.create({ id: 3, type_question: 3, content: "multiple" });
            await Type_question.create({ id: 4, type_question: 4, content: "numerica" });

            await Exam.create({ id: "1", moduleId: "1", name: "sdfs" });

        } catch (err) {
            return new Error("An error has ocurred");
        }
    });

    after(async() => {
        try {
            /*
                    await Question.destroy({ force: true });
                    await Exam.destroy({ force: true });
                    await Type_question.destroy({ force: true });
    
                    */

            let data1 = await Question.findAll();
            if (data1) {
                let vector1 = Object.values(data1);
                vector1.forEach(item => item.destroy({ force: true }));
            }

            let data2 = await Exam.findAll();
            if (data2) {
                let vector2 = Object.values(data2);
                vector2.forEach(item => item.destroy({ force: true }));
            }
            let data4 = await Type_question.findAll();
            if (data4) {
                let vector4 = Object.values(data4);
                vector4.forEach(item => item.destroy({ force: true }));
            }

        } catch (err) {
            return new Error("An error has ocurred");
        }
    });

    describe("Creation of OPEN Question", () => {

        it("should return an question created", (done) => {

            chai.request(app)
                .post("/api/v1/question")
                .send({
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