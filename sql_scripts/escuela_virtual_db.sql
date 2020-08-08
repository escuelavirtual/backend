/*
Created		03/08/2020
Modified		08/08/2020
Project		
Model		
Company		
Author		
Version		
Database		mySQL 5 
*/


drop table IF EXISTS ANSWER;
drop table IF EXISTS QUESTION;
drop table IF EXISTS GROUP_ACTIVITY;
drop table IF EXISTS MODULE;
drop table IF EXISTS TOPIC;
drop table IF EXISTS GRADE_REPORT_PER_COURSE;
drop table IF EXISTS EXAMINATION;
drop table IF EXISTS GROUP;
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
	title Varchar(50) NOT NULL,
	description Varchar(50) NOT NULL,
	start_date Date,
	end_date Date,
	requirements Varchar(50) NOT NULL,
	isPrivate Bool NOT NULL,
 Primary Key (id_course)) ENGINE = MyISAM;

Create table STUDENT (
	id_student Int NOT NULL,
	id_group_activity Int NOT NULL,
	UNIQUE (id_student),
 Primary Key (id_student)) ENGINE = MyISAM;

Create table GROUP (
	id_group Int NOT NULL AUTO_INCREMENT,
	id_student Int NOT NULL,
	id_course Varchar(50) NOT NULL,
 Primary Key (id_group)) ENGINE = MyISAM;

Create table EXAMINATION (
	id_examination Int NOT NULL AUTO_INCREMENT,
	id_student Int NOT NULL,
	id_module Int,
	type Varchar(50) NOT NULL,
	name Varchar(50) NOT NULL,
	grade Double NOT NULL,
 Primary Key (id_examination)) ENGINE = MyISAM;

Create table GRADE_REPORT_PER_COURSE (
	id_grade Int NOT NULL,
	id_student Int NOT NULL,
	final_grade Double NOT NULL,
	isApproved Bool NOT NULL,
 Primary Key (id_grade)) ENGINE = MyISAM;

Create table TOPIC (
	id_module Int NOT NULL,
	name_topic Varchar(50) NOT NULL,
	description Varchar(400),
	UNIQUE (name_topic)) ENGINE = MyISAM;

Create table MODULE (
	id_module Int NOT NULL,
	id_course Varchar(50) NOT NULL,
	description Varchar(400),
 Primary Key (id_module)) ENGINE = MyISAM;

Create table GROUP_ACTIVITY (
	id_group_activity Int NOT NULL,
	id_module Int NOT NULL,
	activity_name Varchar(50) NOT NULL,
	instructions Varchar(50) NOT NULL,
	grade Double,
	comments Varchar(200),
 Primary Key (id_group_activity)) ENGINE = MyISAM;

Create table QUESTION (
	id_question Int NOT NULL,
	id_examination Int NOT NULL,
	content Varchar(50) NOT NULL,
	open_answer Varchar(50),
 Primary Key (id_question)) ENGINE = MyISAM;

Create table ANSWER (
	id_question Int NOT NULL,
	content Varchar(50) NOT NULL,
	isTrue Bool NOT NULL) ENGINE = MyISAM;


Alter table STUDENT add Foreign Key (id_student) references USER (id) on delete  restrict on update  restrict;
Alter table PROFESSOR add Foreign Key (id_professor) references USER (id) on delete  restrict on update  restrict;
Alter table COURSE add Foreign Key (id_professor) references PROFESSOR (id_professor) on delete  restrict on update  restrict;
Alter table GROUP add Foreign Key (id_course) references COURSE (id_course) on delete  restrict on update  restrict;
Alter table MODULE add Foreign Key (id_course) references COURSE (id_course) on delete  restrict on update  restrict;
Alter table GROUP add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table EXAMINATION add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table GRADE_REPORT_PER_COURSE add Foreign Key (id_student) references STUDENT (id_student) on delete  restrict on update  restrict;
Alter table QUESTION add Foreign Key (id_examination) references EXAMINATION (id_examination) on delete  restrict on update  restrict;
Alter table EXAMINATION add Foreign Key (id_module) references MODULE (id_module) on delete  restrict on update  restrict;
Alter table TOPIC add Foreign Key (id_module) references MODULE (id_module) on delete  restrict on update  restrict;
Alter table GROUP_ACTIVITY add Foreign Key (id_module) references MODULE (id_module) on delete  restrict on update  restrict;
Alter table STUDENT add Foreign Key (id_group_activity) references GROUP_ACTIVITY (id_group_activity) on delete  restrict on update  restrict;
Alter table ANSWER add Foreign Key (id_question) references QUESTION (id_question) on delete  restrict on update  restrict;


/* Users permissions */


