const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const app = require('../../src/index');

const { expect } = chai;
chai.use(chaiHttp);

describe('Create course', () => {
    
    //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9Ad2VieGFuZGVyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZTaDFadHY1bG5xdEpXQS5FaUVzVGVacllEWkd0UG1yZnRrci5rQVNqLk5yQktLc0JobTBtIiwiaWF0IjoxNTk4MDgwNzUzLCJleHAiOjE2MDI0MDA3NTN9.fITMz4Yv5a7-B71q-PE_WTbihPCfma_IWYHc78Y7TMA";
    let token = jwt.sign(
        {
          email: 'test@webxander.com',
          password: bcrypt.hashSync('secret',10),
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
      );
    
    describe('POST /api/v1/courses', () => {
        //setTimeout(500);

        it('should return as course created', (done) => {

            chai.request(app)
                .post('/api/v1/courses')
                .set( 'Authorization', `Bearer ${token}` )
                .set( 'Connection', 'close' )
                .send({                  
                    'title': 'Demo',
                    'description': 'My demo course',
                    'categoryId': 1,
                    'professorId': 1
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