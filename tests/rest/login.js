const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
const faker = require("faker");
const { generateValidToken } = require("../../src/services/generateToken");
const UserService = require('../../src/services/userService');
const StudentService = require('../../src/services/studentService');
const { expect } = chai;

chai.use(chaiHttp);

const fakerEmail = faker.internet.email();

describe('Login tests', () => {

    describe('POST /api/v1/login', () => {
        
        let user;

        before(async () => {
            const body = {
                "firstname": "User",
                "lastname": "Demo",
                "email": fakerEmail,
                "password": "secret"
            };
            
            user = await UserService.createUser(body);
            const student = await StudentService.createStudent(user.id);

        });

        afterEach(() => {
            server.close();
        });

        it('should return as user authenticated', (done) => {

            chai.request(server)
                .post('/api/v1/login')
                .set('Connection', 'close')
                .send({
                    'email': fakerEmail,
                    'password': 'secret'
                })
                .end(function (err, res) {

                    if (err) done(err)
                    
                    expect(res).to.have.header('authorization')
                    expect(res).to.have.status(200);
                    done()
                });
        })

        it('should return an error if user is not valid', (done) => {

            chai.request(server)
                .post('/api/v1/login')
                .set('Connection', 'close')
                .send({

                    'email': 'fake@school.com',
                    'password': 'secret'

                })
                .end(function (err, res) {

                    if (err) done(err)
                    expect(res).to.have.status(500);
                    done()

                });
        })
    })
})
