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

    describe('POST /api/v1/login', () => {
        //setTimeout(500);

        it('should return as user authenticated', (done) => {            

            chai.request(server)
                .post('/api/v1/login')
                .set( 'Connection', 'close' )
                .send({
                    
                    'email': 'test@webxander.com',
                    'password': 'secret',
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA"


                })
                .end(function(err, res){
                    
                    //expect(err).to.have.status(500);
                    if (err) done(err)
                    //console.log(res)
                    expect(res).to.have.status(200);
                    done()
                   
                });

        })


        it('should return an error', (done) => {            

            chai.request(server)
                .post('/api/v1/login')
                .set( 'Connection', 'close' )
                .send({
                    
                    'email': 'fake@school.com',
                    'password': 'secret',
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA"


                })
                .end(function(err, res){
                    
                    if (err) done(err)
                    expect(res).to.have.status(500);
                    done()
                   
                });

        })
    })
})