const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../index');

const { expect } = chai;

chai.use(chaiHttp);

describe('Create course', () => {
    let server = null

    beforeEach((done) => {
        server = app.listen(done)
        
    }),
    
    describe('POST /api/v1/courses', () => {
        //setTimeout(500);

        it('should return as course created', (done) => {

            chai.request(server)
                .post('/api/v1/courses')
                .set( 'Connection', 'close' )
                .send({
                    
                    'title': 'Demo',
                    'description': 'My demo course',
                    'category': 1,
                    'id_professor': 1,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA"


                })
                .end(function(err, res){

                    if (err) done(err)
                    //console.log(res);
                    let msg = JSON.parse(res.text).message
                    
                    expect(msg).equals('course create successfully');
                    expect(res).to.have.status(201);
                    done()
                   
                });

        })
    })
})