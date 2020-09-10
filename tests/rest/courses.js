const chai = require('chai');
const chaiHttp = require('chai-http');
const { generateValidToken } = require("../../src/services/generateToken");
const server = require('../../src/index');


const { expect } = chai;
chai.use(chaiHttp);

describe('Course API', () => {
    
    const user = {
        email: 'test@webxander.com',
        id: 1,
    };
    const token = generateValidToken(user);

    afterEach(() => {
        server.close();
    });
    
    describe('POST /api/v1/courses', () => {

        it('should return as course created', (done) => {

            chai.request(server)
                .post('/api/v1/courses')
                .set( 'Authorization', `${token}` )
                .set( 'Connection', 'close' )
                .send({                  
                    'title': 'Demo',
                    'description': 'My demo course',
                    'categoryId': 1,
                    'professorId': 1
                })
                .end(function(err, res){

                    if (err) done(err)

                    let msg = JSON.parse(res.text).message
                    
                    expect(msg).equals('the course has been created');
                    expect(res).to.have.status(201);
                    done()
                   
                });

        })

        it('should return 400 if title is empty', (done) => {

            chai.request(server)
                .post('/api/v1/courses')
                .set( 'Authorization', `${token}` )
                .set( 'Connection', 'close' )
                .send({                  
                    'description': 'My demo course',
                    'categoryId': 1,
                    'professorId': 1
                })
                .end(function(err, res){

                    if (err) done(err)
                    
                    expect(res).to.have.status(400);
                    done()
                   
                });

        })
    })
})