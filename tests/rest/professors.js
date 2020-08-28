const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index');

//Assertion style
const expect = chai.expect;
chai.use( chaiHttp );

describe('Professor  API',() => {
    
    it('Should get all the users with the professor rol',(done) => {
        chai.request(app)
            .get('/api/v1/professors')
            .end((error,res) => {
                expect(res).to.have.status(200);
                done();
            })
    });
   
    it('Should not get all the users with the professor rol',(done)=>{
        chai.request(app)
            .get('/api/v1/professor')
            .end((error,res)=>{
                expect(res).to.have.status(404);
                done();
            })
    });
    
    it('Should return a user with professor role created',(done)=>{
        chai.request(app)
            .post('/api/v1/professors')
            .set('Connection','close')
            .send({
                'firstname':'John',
                'lastname':'Freedom',
                'email':'john@gmail.com',
                'password':'123',
                'valuation':5

            })
            .end((err,res)=>{
                if(err){
                    done(err);
                }
                expect(res).to.have.status(201);
                done();
            })

    });
    
    it('Should not return a user with professor role created',(done)=>{
        chai.request(app)
            .post('/api/v1/professor')
            .end((err,res) => {
                if(err){
                    done(err);
                }
                expect(res).to.have.status(404);
                done();
            })

    }); 
    
    it('Should be an error because a bad request',(done) => {
        chai.request(app)
            .post('/api/v1/professors')
            .send({
                'firstname':'John',
                'lastname':'Freedom',
                //'email':'john@gmail.com',
                'password':'123',
                'valuation':5
                })
            .end((err,res) => {
                if(err){
                    done(err);
                }
                expect(res).to.have.status(400);
                done();
            })

    });
            
   
});