const chai = require("chai");
const chaiHttp = require("chai-http");
const faker = require("faker");
const { expect } = require("chai");

const app = require("../../src/index");
const { generateValidToken } = require("../../src/services/generateToken");
const StudentService = require('../../src/services/studentService');
const EnrollmentController = require('../../src/controllers/enrollmentController');
const User = require("../../src/models/user");
const Student = require('../../src/models/student');
const Enrollment = require('../../src/models/enrollment');
const { sequelize } = require("../../config/db/mysql");
const { exec } = require('child_process');
const e = require("express");
const LOG = require('debug')('error');
const server = require('../../src/index');


//1. Para que un estudiante pueda enrolarse al curso este debe existir y haber iniciado sesión
//2. Un estudiante no puede enrolarse al mismo curso más de 1 vez
//3. Un estudiante tendrá accesos al curso cuando el profesor lo haya autorizado 
//4. Un estudiante NO puede desenrolarse de un curso
//5. Un profesor puede desenrolar de un curso a un estudiante
//6. Solo los estudiantes pueden visualizar los cursos?

chai.use(chaiHttp);
describe('Enrollment Tests', () => {
    describe('A student can enroll to a course', () => {
        const existentCourseId = 100;
        let student, token;
        before(async function(){
            student = await StudentService.createStudent({firstname: 'Rigoberto', lastname: 'Pérez', email: 'ed2@gmail.com', password: 'cisco123'});
            //token = generateValidToken(student);
        });

        it.only('should return true if the course exists', (done) => {             
            chai.request(app)
                .get("/api/v1/enrollment")
                .query({studentId: student.id, courseId: existentCourseId})
                //.set( 'Authorization', `Bearer ${token}` )
                .end(function(err, res) {
                    if (err) done(err);
                    expect(res).to.have.property('ok', true);
                    expect(res).to.have.status(201);
                    
                    done();
                });                
        });                
    });
});

