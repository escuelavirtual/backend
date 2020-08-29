const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index');
const { expect } = chai;

chai.use(chaiHttp);

describe('User tests', () => {
<<<<<<< HEAD
    let server = null

    beforeEach((done) => {
        server = app.listen(done)
        
    }),
=======
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa

    describe('POST /api/v1/login', () => {
        
        it('should return as user authenticated', (done) => {            

<<<<<<< HEAD
            chai.request(server)
=======
            chai.request(app)
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa
                .post('/api/v1/login')
                .set( 'Connection', 'close' )
                .send({
                    
<<<<<<< HEAD
                    'email': 'test@webxander.com',
                    'password': 'secret',
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA"
=======
                    'email': 'demo@webxander.com',
                    'password': 'secret'
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa


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

<<<<<<< HEAD
            chai.request(server)
=======
            chai.request(app)
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa
                .post('/api/v1/login')
                .set( 'Connection', 'close' )
                .send({
                    
                    'email': 'fake@school.com',
<<<<<<< HEAD
                    'password': 'secret',
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA"

=======
                    'password': 'secret'
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa

                })
                .end(function(err, res){
                    
                    if (err) done(err)
                    expect(res).to.have.status(500);
                    done()
                   
                });
        })
    })
})