const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index');

//Assertion style
const expect = chai.expect;
chai.use(chaiHttp);

describe('Student  API', () => {

    it('Should return a student', (done) => {
        chai.request(app)
            .get('/api/v1/students/1')
            .end((error, res) => {
                expect(res).to.have.status(200);
                //console.log(JSON.parse(res.text));
                expect(JSON.parse(res.text)).to.have.all.keys("id", "userId", "firstname", "lastname", "email", "createdAt");
                done();
            })
    });

    it('Should return an student created', (done) => {
        chai.request(app)
            .post('/api/v1/students')
            .set('Connection', 'close')
            .send({
                'firstname': 'John',
                'lastname': 'Freedom',
                'email': 'student@gmail.com',
                'password': '123'
            })
            .end((err, res) => {
                if (err) { done(err); }
                expect(res).to.have.status(201);

                expect(JSON.parse(res.text).data).to.have.all.keys("id", "userId", "firstname", "lastname", "email", "createdAt");
                done();
            })
    });

    it('Should be an error because a bad request', (done) => {
        chai.request(app)
            .post('/api/v1/students')
            .send({
                'firstname': 'John',
                'lastname': 'Freedom',
                //'email':'john@gmail.com',
                'password': '123',
            })
            .end((err, res) => {
                if (err) { done(err); }
                expect(res).to.have.status(400);
                done();
            })

    });


});