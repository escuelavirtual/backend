const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../index');

const { expect } = chai;

chai.use(chaiHttp);

describe('User tests', () => {
    let server = null

    beforeEach((done) => {
        server = app.listen(done)
        
    }),
    
    describe('POST /api/v1/register', () => {
        //setTimeout(500);

        it('should return as user registered', (done) => {            

            chai.request(server)
                .post('/api/v1/register')
                .set( 'Connection', 'close' )
                .send({
                    
                    'name': 'Professor',
                    'lastname': 'School',


                })
                .end(function(err, res){
                    expect(err).to.be.null;
                    let msg = JSON.parse(res.text).message
                    
                    expect(msg).equals('user create successfully');
                    expect(res).to.have.status(201);
                    done()
                   
                });

        })
    }),

    describe('POST /api/v1/login', () => {
        //setTimeout(500);

        it('should return as user authenticated', (done) => {            

            chai.request(server)
                .post('/api/v1/auth/login')
                .set( 'Connection', 'close' )
                .send({
                    
                    'email': 'demo@school.com',
                    'password': 'secret',


                })
                .end(function(err, res){
                    
                    //expect(err).to.have.status(500);
                    expect(res).to.have.status(200);
                    done()
                   
                });

        })


        it('should return an error', (done) => {            

            chai.request(server)
                .post('/api/v1/auth/login')
                .set( 'Connection', 'close' )
                .send({
                    
                    'email': 'fake@school.com',
                    'password': 'secret',


                })
                .end(function(err, res){
                    
                    expect(res).to.have.status(500);
                    done()
                   
                });

        })
    })
})