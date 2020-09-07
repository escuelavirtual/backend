const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');

//Assertion style
const expect = chai.expect;
chai.use(chaiHttp);

describe('Professor  API', () => {

    afterEach( () => {
        server.close();
    });

    it('Should get all the users with the professor rol', (done) => {
        chai.request(server)
            .get('/api/v1/professors')
            .end((error, res) => {
                expect(res).to.have.status(200);

                let professors = JSON.parse(res.text);

                expect(professors).to.have.property("professors");
                done();
            })
    });

    it('Should return an user with professor role created', (done) => {
        chai.request(server)
            .post('/api/v1/professors')
            .set('Connection', 'close')
            .send({
                'firstname': 'John',
                'lastname': 'Freedom',
                'email': 'john@gmail.com',
                'password': '123456'
            })
            .end((err, res) => {
                if (err) { done(err); }
                expect(res).to.have.status(201);

                expect(JSON.parse(res.text).data).to.have.all.keys("id", "userId", "firstname", "lastname", "email", "createdAt");
                done();
            })
    });

    it('Should be an error because a bad request', (done) => {
        chai.request(server)
            .post('/api/v1/professors')
            .send({
                'firstname': 'John',
                'lastname': 'Freedom',
                //'email':'john@gmail.com',
                'password': '123456'
            })
            .end((err, res) => {
                if (err) { done(err); }
                expect(res).to.have.status(400);
                done();
            })

    });


});