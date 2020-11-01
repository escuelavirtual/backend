const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/index");

const { expect } = chai;
const Exam = require("../../src/models/exam");

chai.use(chaiHttp);
let examCreado;

const deleteRegister = async(data) => {
    let vector = await Object.values(data);
    for (const item of vector) {
        const erased = await item.destroy({ force: true });
        // console.log('erased ', JSON.stringify(erased))
    }
};

describe("Exam Test", () => {

    after(async() => {
        try {
            //  await Exam.destroy({ force: true });

            let data2 = await Exam.findAll();
            await deleteRegister(data2);

        } catch (err) {
            console.log("Error: ", err);
            //  return new Error("An error has ocurred");
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
                    //  console.log('created ', res, JSON.stringify(res))

                    expect(JSON.parse(res.text)).to.have.all.keys("message", "data");
                    expect(res).to.have.status(200);
                    let otro = JSON.parse(res.text);
                    examCreado = otro.data.id;
                    done();
                });
        });

        it("Should return as Exam list", (done) => {

            chai.request(app)
                .get("/api/v1/exam/" + examCreado)
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
})