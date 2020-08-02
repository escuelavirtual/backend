# Backend - Plataforma de aprendizaje en linea

## Contenido

### Guidelines

En redaccion..

### API Endpoints

Utilizaremos versiones para los Endpoints, puedes encontrar información sobre las mismas en estos recursos.
https://stackoverflow.com/questions/389169/best-practices-for-api-versioning
https://www.baeldung.com/rest-versioning

Para nuestro proyecto, usaremos la forma:
```
http://host/v1/users
http://host/v1/courses
```


### Entidades

Entidad Usuario: nombre y apellido, email, password, roles, datos personales.
Un usuario puede ser, estudiante, profesor, moderador o administrador, para ello se define en Roles.
Entidad Profesor: Usuario. Cursos a cargo. Valoracion.
Entidad Alumno: Usuario. Calificaciones, Cursos
Entidad Curso: Titulo, descripcion, temario, Fecha de inicio (opcional),  fecha de finalizacion (opcional), Requisitos (Requisitos de inscripcion al curso, como cursos preaprobados), Alumnos registrados, Profesor a cargo
Entidad Grupo: Alumnos registrados, Curso asignado.
Entidad Evaluacion: Tipo (Autoevaluacion, revisada por el profesor), Profesor, Curso, Requisitos (Tal como la aprobacion de otras evaluaciones), Cuestionario (Preguntas).

Esta sección esta sujeta a futuras revisiones.

### Recursos

En redaccion..


## Contribuir

Si desea contribuir con nosotros, pongase en contacto.
