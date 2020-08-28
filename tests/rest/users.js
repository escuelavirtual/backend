const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../../index");

const { expect } = chai;

chai.use(chaiHttp);

describe("User tests", () => {
    
    let server = null;

    beforeEach((done) => {
        server = app.listen(done);
        
    });

    describe("POST /api/v1/login", () => {
        //setTimeout(500);

        it("should return as user authenticated", (done) => {            

            chai.request(server)
                .post("/api/v1/login")
                .set( "Connection", "close" )
                .send({
                    
                    "email": "test@webxander.com",
                    "password": "secret"


                })
                .end(function(err, res){
                    
                    //expect(err).to.have.status(500);
                    if (err) done(err);
                    //console.log(res)
                    expect(res).to.have.status(200);
                    done();
                   
                });

        });


        it("should return an error", (done) => {            

            chai.request(server)
                .post("/api/v1/login")
                .set( "Connection", "close" )
                .send({
                    
                    "email": "fake@school.com",
                    "password": "secret"


                })
                .end(function(err, res){
                    
                    if (err) done(err);
                    expect(res).to.have.status(500);
                    done();
                   
                });

        });
    });
});