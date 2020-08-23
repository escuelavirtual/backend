import {expect} from "chai"

import chaiHttp from 'chai-http';

import app from '../../index';


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
                    'category': 'maths',
                    'id_professor': 1,


                })
                .end(function(err, res){
                    expect(err).to.be.null;
                    let msg = JSON.parse(res.text).message
                    
                    expect(msg).equals('course create successfully');
                    expect(res).to.have.status(201);
                    done()
                   
                });

        })
    })
})