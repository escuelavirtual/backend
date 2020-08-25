const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require('../../index');

//Assertion style
chai.shoud();
chai.use(chaiHttp);
describe('Professor  API',()=>{
    /*
    Test the GET route
    */
   describe('GET /api/v1/professors',()=>{
       it('It should get all the users with the professor rol',(done)=>{
            chai.request(app)
                .get('/api/v1/professors')
                .end((error,res)=>{
                    res.should.have.status(200);
                    done();
                })
       })
   })

   describe('GET /api/v1/professors',()=>{
    it('It should not get all the users with the professor rol',(done)=>{
         chai.request(app)
             .get('/api/v1/professor')
             .end((error,res)=>{
                 res.should.have.status(404);
                 done();
             })
    })
})
});