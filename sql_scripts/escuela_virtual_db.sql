/*
Created		03/08/2020
Modified		07/08/2020
Project		
Model		
Company		
Author		
Version		
Database		mySQL 5 
*/


drop table IF EXISTS TOPIC;
drop table IF EXISTS GRADE_REPORT;
drop table IF EXISTS EXAMINATION;
drop table IF EXISTS _GROUP_;
drop table IF EXISTS STUDENT;
drop table IF EXISTS COURSE;
drop table IF EXISTS PROFESSOR;
drop table IF EXISTS USER;


Create table USER (
	id Int NOT NULL AUTO_INCREMENT,
	name Varchar(50) NOT NULL,
	lastname Varchar(50) NOT NULL,
	email Varchar(50) NOT NULL,
	pass Varchar(50) NOT NULL,
 Primary Key (id)) ENGINE = MyISAM;

Create table PROFESSOR (
	id_professor Int NOT NULL,
	valuation Int NOT NULL,
	UNIQUE (id_professor),
 Primary Key (id_professor)) ENGINE = MyISAM;

Create table COURSE (
	id_course Varchar(50) NOT NULL,
	id_professor Int NOT NULL,
	requirements Varchar(50) NOT NULL,
	title Varchar(50) NOT NULL,
	description Varchar(50) NOT NULL,
	syllabus Varchar(20) NOT NULL,
	start_date Date,
	end_date Date,
	isPrivate Bool NOT NULL,
 Primary Key (id_course)) ENGINE = MyISAM;

Create table STUDENT (
	id_student Int NOT NULL,
	UNIQUE (id_student),
 Primary Key (id_student)) ENGINE = MyISAM;

Create table _GROUP_ (
	id_group Int NOT NULL AUTO_INCREMENT,
	id_student Int NOT NULL,
	id_course Varchar(50) NOT NULL,
 Primary Key (id_group)) ENGINE = MyISAM;

Create table EXAMINATION (
	id_examination Int NOT NULL AUTO_INCREMENT,
	id_topic Int NOT NULL,
	id_student Int NOT NULL,
	id_course Varchar(50) NOT NULL,
	tipo Varchar(50) NOT NULL,
	name Varchar(50) NOT NULL,
	grade Double NOT NULL,
 Primary Key (id_examination)) ENGINE = MyISAM;

Create table GRADE_REPORT (
	id_grade Int NOT NULL,
	id_student Int NOT NULL,
	final_grade Double NOT NULL,
	isApproved Bool NOT NULL,
 Primary Key (id_grade)) ENGINE = MyISAM;

Create table TOPIC (
	id_topic Int NOT NULL,
	id_course Varchar(50) NOT NULL,
	name_topic Varchar(50) NOT NULL,
 Primary Key (id_topic)) ENGINE = MyISAM;


Alter table STUDENT add Foreign Key (id_student) references USER (id) on delete  restrict on update  restrict;
Alter table PROFESSOR add Foreign Key (id_professor) references USER (id) on delete  restrict on update  restrict;
Alter table COURSE add Foreign Key (id_professor) references PROFESSOR (id_professor) on delete  restrict on update  restrict;
Alter table _GROUP_ add Foreign Key (id_course) references COURSE (id_course) on delete  restrict on update  restrict;
Alter table EXAMINATION add Foreign Key (id_course) references COURSE (id_course) on delete  restrict on update  restrict;
Alter table TOPIC add Foreign Key (id_course) references COURSE (id_course) on delete  restrict on update  restrict;
Alter table _GROUP_ add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table EXAMINATION add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table GRADE_REPORT add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table EXAMINATION add Foreign Key (id_topic) references TOPIC (id_topic) on delete  restrict on update  restrict;


/* Users permissions */


