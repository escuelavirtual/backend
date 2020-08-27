const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require('../../index');

//Assertion style
const expect=chai.expect;
chai.use(chaiHttp);
describe('Professor  API',()=>{
    /*
    Test the GET route
    */
   describe('GET /api/v1/professors',()=>{
       it('Should get all the users with the professor rol',(done)=>{
            chai.request(app)
                .get('/api/v1/professors')
                .end((error,res)=>{
                    expect(res).to.have.status(200);
                    done();
                })
       })
   })

   describe('GET /api/v1/professors',()=>{
    it('Should not get all the users with the professor rol',(done)=>{
         chai.request(app)
             .get('/api/v1/professor')
             .end((error,res)=>{
                 expect(res).to.have.status(404);
                 done();
             })
    })
})
    describe('POST /api/v1/professors',()=>{
        it('Should return a user with professor role created',(done)=>{
            chai.request(app)
            .post('/api/v1/professors')
                        .set('Connection','close')
                        .send({
                            'firstname':'John',
                            'lastname':'Freedom',
                            'email':'john@gmail.com',
                            'password':'123',
                            'valuation':5

                        })
                        .end((err,res)=>{
                            if(err){
                                done(err);
                            }
                            expect(res).to.have.status(201);
                            done();
                        })

        });
            
    })

    describe('POST /api/v1/professors',()=>{
        it('Should not return a user with professor role created',(done)=>{
            chai.request(app)
                .post('/api/v1/professor')
                .end((err,res)=>{
                    if(err){
                        done(err);
                    }
                    expect(res).to.have.status(404);
                    done();
                })

        });
            
    })
});