const chai = require("chai");
const chaiHttp = require("chai-http");
const faker = require("faker");
const app = require("../../src/index");
const Answer = require("../../src/models/answer");
const { expect } = chai;

chai.use(chaiHttp);

describe("Answer tests", () => {
    let num;
    let res1;
    let res2;

    before(() => {
        num = faker.random.number();
    })

    after(async() => {

        try {
            const answer1 = await Answer.findByPk(res1.body.data.id);
            if (answer1) await answer1.destroy();
            const answer2 = await Answer.findByPk(res2.body.data.id);
            if (answer2) await answer2.destroy();
        } catch (err) {
            return new Error("An error has ocurred");
        }

    });

    describe("Create a answer of question open", () => {

        it("should return a answer created, if content is empty", (done) => {

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

                    res1 = res;
                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);

                    done();

                });
        })
    })

    describe("Create a answer of closed question multiple choice", () => {

        it("Should return a Answer Created", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3." + num,
                    "question_id": 5,
                    "content": "naranja" + num,
                    "isTrue": 1,
                    "score": 10
                })
                .end(function(err, res) {

                    if (err) done(err);

                    res2 = res;
                    expect(res).to.have.status(200);
                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    done();
                });
        });

        it("Should return a Error, the content is the same as the previous answer", (done) => {

            chai.request(app)
                .post("/api/v1/answer")
                .send({
                    "code": "r3." + num,
                    "question_id": 5,
                    "content": "naranja" + num,
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
        });

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