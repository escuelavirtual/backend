const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
const { expect } = chai;
chai.use(chaiHttp)

describe('Category Test', () => {

    describe('GET /api/v1/category', () => {

        afterEach( () => {
            server.close();
        });
        
        it('should return as category list', (done) => {
            chai.request(server)
                .get('/api/v1/category')
                .end(function (err, res) {
                    if (err) done(err);

                    expect(res).to.have.status(200);
                    done();
                })
        })
    })

})
