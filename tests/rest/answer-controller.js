const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/index");
const Answer = require("../../src/models/answer");
const { expect } = chai;

const User = require("../../src/models/user");
const Professor = require("../../src/models/professor");
const Category = require("../../src/models/category");
const Course = require("../../src/models/course");
const Module = require("../../src/models/module");
const Exam = require("../../src/models/exam");
const Question = require("../../src/models/question");
const Type_question = require("../../src/models/type_question.js");


chai.use(chaiHttp);
before(async() => {
    try {
        // ** METODO 1

        await Type_question.create({ id: 1, type_question: 1, content: "abierta" });
        await Type_question.create({ id: 2, type_question: 2, content: "cerrada" });
        await Type_question.create({ id: 3, type_question: 3, content: "multiple" });
        await Type_question.create({ id: 4, type_question: 4, content: "numerica" });

        await User.create({ id: "1", firstname: "ana", lastname: "aa", email: "aaa@ddd.com", password: "sss" });
        await Category.create({ id: "1", name: "alto", slug: "1" });
        await Professor.create({ id: "1", userId: "1", valuation: "11" });
        await Course.create({ id: "1", professorId: "1", categoryId: "1", title: "nodejs", description: "ssss", isPrivate: "0", invitationCode: "adfsdfs" });
        await Module.create({ id: "1", courseId: "1", title: "safsd", description: "sdfs" });

        await Exam.create({ id: "1", moduleId: "1", name: "sdfs" });
        await Question.create({ id: 1, examId: 1, typeQuestionId: 1, code: "q1", content: "pregunta abierta", minimum: 20, length: 100 });
        await Question.create({ id: 2, examId: 1, typeQuestionId: 2, code: "q2", content: "pregunta cerrada" });
        await Question.create({ id: 3, examId: 1, typeQuestionId: 3, code: "q3", content: "pregunta multi opcion" });
        await Question.create({ id: 4, examId: 1, typeQuestionId: 4, code: "q4", content: "pregunta numerica", minimum: 10, tope: 100 });

        //** METODO 2 */
        /*   let usuarios = await User.findByPk(1);
        if (usuarios == undefined) {
            await User.create({ id: "1", firstname: "persona 1", lastname: "lopez perez", email: "aaa@ddd.com", password: "s89ss" });
        }

        let categories = await Category.findByPk(1);
        if (categories === undefined) { await Category.create({ id: "1", name: "alto", slug: "1" }); }

        let professors = await Professor.findByPk(1);
        if (professors == undefined || professors == null) { await Professor.create({ id: "1", userId: "1", valuation: "11" }); }

        let courses = await Course.findByPk(1);
        if (courses === undefined || courses === null) {
            await Course.create({ id: "1", professorId: "1", categoryId: "1", title: "alto", description: "ssss", isPrivate: "0", invitationCode: "adf5$5sdfs" });
        }

        let modules = await Module.findByPk(1);
        if (modules == undefined || modules == null) { await Module.create({ id: "1", courseId: "1", title: "safsd", description: "sdfs" }); }

        await Type_question.create({ id: 1, type_question: 1, content: "abierta" });
        await Type_question.create({ id: 2, type_question: 2, content: "cerrada" });
        await Type_question.create({ id: 3, type_question: 3, content: "multiple" });
        await Type_question.create({ id: 4, type_question: 4, content: "numerica" });


        await Exam.create({ id: "1", moduleId: "1", name: "sdfs" });
        await Question.create({ id: 1, examId: 1, typeQuestionId: 1, code: "q1", content: "pregunta abierta", minimum: 20, length: 100 });
        await Question.create({ id: 2, examId: 1, typeQuestionId: 2, code: "q2", content: "pregunta cerrada" });
        await Question.create({ id: 3, examId: 1, typeQuestionId: 3, code: "q3", content: "pregunta multi opcion" });
        await Question.create({ id: 4, examId: 1, typeQuestionId: 4, code: "q4", content: "pregunta numerica", minimum: 10, tope: 100 });
*/

    } catch (err) {
        return new Error("An error has ocurred");
    }
});

after(async() => {
    try {
        let data;
        let vector;



        await Answer.destroy({ force: true });
        await Question.destroy({ force: true });
        await Exam.destroy({ force: true });
        await Module.destroy({ force: true });
        await Type_question.destroy({ force: true });
        /*
                data = await Answer.findAll();
                if (data) {
                    vector = Object.values(data);
                    vector.forEach(item => (item.destroy({ force: true })));
                }

                let data1 = await Question.findAll();
                if (data1) {
                    let vector1 = Object.values(data1);
                    await vector1.forEach(item => item.destroy({ force: true }));
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

                let data5 = await Module.findAll();
                if (data5) {
                    let vector5 = Object.values(data5);
                    await vector5.forEach(item => item.destroy({ force: true }));
                }

                let data6 = await Course.findAll();
                if (data6) {
                    let vector5 = Object.values(data6);
                    await vector5.forEach(item => item.destroy({ force: true }));
                }

                let data7 = await Professor.findAll();
                if (data7) {
                    let vector5 = Object.values(data7);
                    await vector5.forEach(item => item.destroy({ force: true }));
                }

                let data8 = await Category.findAll();
                if (data8) {
                    let vector5 = Object.values(data8);
                    await vector5.forEach(item => item.destroy({ force: true }));
                }

                let data9 = await User.findAll();
                if (data9) {
                    let vector5 = Object.values(data9);
                    await vector5.forEach(item => item.destroy({ force: true }));
                }
        */

    } catch (err) {
        return new Error("An error has ocurred");
    }
});
describe("Answer Tests", () => {

    describe("Create an answer of Question Open", () => {

        it("Should return an answer created, if content is empty", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r1.1",
                    "questionId": 1,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Create an answer of Question Multiple choice", () => {

        it("Should return a Answer Created", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3.1",
                    "questionId": 3,
                    "content": "red",
                    "isTrue": 1,
                    "score": 15
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(200);
                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    done();
                });
        });

        it("Should return a Error, the content is the same as the previous answer", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3.2",
                    "questionId": 3,
                    "content": "red",
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(res).to.have.status(500);
                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    done();
                });
        });

        it("Should return an Error, if content is empty and type of question is not open", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3.3",
                    "questionId": 3,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    expect(res).to.have.status(500);
                    done();
                });
        });

        it("Should return an Error, if questionId is empty", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3.4",
                    "content": "yellow",
                    "isTrue": 1,
                    "score": 15
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("errors");
                    expect(res).to.have.status(400); // 404
                    done();
                });
        });
    });

    describe("Create an answer of Question Numerical", () => {

        it("Should return an answer created", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r4.1",
                    "questionId": 4,
                    "content": 70,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("Should return an Error, if add other answer", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r4.2",
                    "questionId": 4,
                    "content": 80,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    expect(JSON.parse(res.text)).to.have.all.keys("err");
                    expect(res).to.have.status(500);
                    done();
                });
        });
    });
});