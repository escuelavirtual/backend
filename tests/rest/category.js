const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const {expect} = chai;
chai.use(chaiHttp)

describe('Category Test',() => {

    let server = null;
    beforeEach((done) => {
        server = app.listen(done)
    }),


    describe('GET /api/v1/category',()=>{
        //starting test
        //mal definido el endpoint te muestra una lista larga ... :/
        it('should return as category list',(done)=>{
            chai.request(server)
            .get('/api/v1/category')
            .end(function(err,res){
                if(err) done(err);
                expect(res).to.have.status(200);
                done();
            })

        })
    })

})
