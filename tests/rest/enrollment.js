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
        const existentCourseId = 5;
        let student, token;
        before(async function(){
            student = await StudentService.createStudent({firstname: 'Rigoberto', lastname: 'Pérez', email: 'ed2@gmail.com', password: 'cisco123'});
            token = generateValidToken(student);
        });

        it.only('should return true if the course exists', (done) => {             
            chai.request(app)
                .get("/api/v1/enrollment")
                .query({studentId: student.id, courseId: existentCourseId})
                .set( 'Authorization', `Bearer ${token}` )
                .end(function(err, res) {
                    if (err) done(err);
                    expect(res).to.have.property('ok', true);
                    expect(res).to.have.status(201);
                    
                    done();
                });                
        });
        
        after(function(){
            const starterPromise = Promise.resolve();
            const asyncThingsToDo = [
                'DELETE_ENROLLMENT_ROWS', 
                'DELETE_STUDENT_ROWS', 
                'DELETE_USER_ROWS', 
                'ALTER_AUTOINCREMENT_STUDENT',
                'ALTER_AUTOINCREMENT_USER',
                'CLOSE_DB_CONNECTION',
                'CLOSE_SERVER_CONNECTION'
            ];


            asyncThingsToDo.reduce(async (previous, task) => { 
                try {
                    const log = await previous;
                    LOG(log);
                } catch(err) {
                    LOG(err)
                }
                return cleanTables(task);
            },starterPromise);
            
        });

        function cleanTables(task) {
            switch(task) {
                case 'DELETE_ENROLLMENT_ROWS':
                    LOG('Inside DELETE_ENROLLMENT_ROWS');
                    return Enrollment.destroy({
                        where: {
                            studentId: student.id,
                            courseId: existentCourseId
                        },
                        force: true
                    }).then(num => `Enrollment rows deleted ${num}`);
                case 'DELETE_STUDENT_ROWS':
                    LOG('Inside DELETE_STUDENT_ROWS');
                    return Student.destroy({
                        where: {
                            id: student.id
                        }, 
                        force: true
                    }).then(num => `Student rows deleted ${num}`);
                case 'DELETE_USER_ROWS':
                    LOG('Inside DELETE_USER_ROWS');
                    return User.destroy({
                        where: {
                            id: student.userId
                        },
                        force: true
                    }).then(num => `User rows deleted ${num}`);
                case 'ALTER_AUTOINCREMENT_STUDENT':
                    LOG('Inside ALTER_AUTOINCREMENT_STUDENT');
                    return sequelize.query(`ALTER TABLE students AUTO_INCREMENT ${student.id}`)
                        //.then(result => result);
                case 'ALTER_AUTOINCREMENT_USER':
                    LOG('Inside ALTER_AUTOINCREMENT_USER');
                    return sequelize.query(`ALTER TABLE users AUTO_INCREMENT ${student.userId}`)
                    //.then(result => result);
                case  'CLOSE_DB_CONNECTION':
                    return sequelize.close();
                case 'CLOSE_SERVER_CONNECTION':
                    return server.close();
            }
        }        
    });
});

