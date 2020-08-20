# Backend - Plataforma de aprendizaje en linea

## Contenido

### Configuración del proyecto

Para instalar este proyecto, clona el repositorio.

Luego en tu terminal:
* `cd ruta / a / su / clon`
* `npm install`
* `npm test`

Cambie el nombre del archivo ubicado en el directorio principal `.env.example` a` .env` si aún no lo ha hecho.

¡Y debería estar listo para comenzar!

### Convenciones

Se debe utilizar el idioma ingles para nombrar a las clases, variables y constantes, nombre de funciones, etc. Los nombres de las clases (javascript)

Se utilizara el estilo camelCase para los nombres de las variables y funciones.

Ejemplos:
```
firstName = 'Alejandro'
schoolName = 'Belgran'

title = 'PHP - Nivel principiante'

function isStudent() { ... }
```

Se utilizara el estilo UPPERCASE para los nombres de las variables globales

Es deseable el uso del estilo PascalCase para los nombres de las clases.

Para más detalles, consulte esta [guía](https://google.github.io/styleguide/jsguide.html)

### API Endpoints

Utilizaremos versiones para los Endpoints, puedes encontrar información sobre las mismas en estos recursos.
https://stackoverflow.com/questions/389169/best-practices-for-api-versioning
https://www.baeldung.com/rest-versioning

Para nuestro proyecto, usaremos la forma:
```
http://host/api/v1/users
http://host/api/v1/courses
```


### Entidades

Entidad Usuario: nombre y apellido, email, password, roles, datos personales.
Un usuario puede ser, estudiante, profesor, moderador o administrador, para ello se define en Roles.

Entidad Profesor: Usuario. Cursos a cargo. Valoracion.

Entidad Alumno: Usuario. Calificaciones, Cursos

Entidad Curso: Titulo, descripcion, temario, Fecha de inicio (opcional),  fecha de finalizacion (opcional), Requisitos (Requisitos de inscripcion al curso, como cursos preaprobados), Alumnos registrados, Profesor a cargo

Entidad Grupo: Alumnos registrados, Curso asignado.

Entidad Evaluacion: Tipo (Autoevaluacion, revisada por el profesor), Profesor, Curso, Requisitos (Tal como la aprobacion de otras evaluaciones), Cuestionario (Preguntas).

Entidad Institucion: Una institucion puede crear sus propias aulas/areas (por ejemplo, Primer año, segundo año) y sus propios cursos. (Esta puede acceder a su nube mediante una url personalizada o desde una instalacion local). Su comportamiento es similar a una institucion academica.

*Esta sección esta sujeta a futuras revisiones.*

### Observaciones

Dato a considerar: Un curso puede tener varios niveles, y el avance al nivel siguiente puede estar sujeto a la aprobacion del profesor o de las autoevaluaciones.
Por ejemplo, un curso de Analisis matematico, el profesor lo puede dividir en varios niveles, Funciones, Limites, Derivadas e Integrales. El avance de cada nivel puede depender de la aprobacion del nivel anterior.

En cada recurso de un curso, los alumnos participantes pueden dejar comentarios o feedback.

Dato a tener en cuenta: Puede haber aulas o cursos privados donde solo es accesible mediante un codigo de invitacion, los mismos no seran visibles en el buscador de cursos.

El sistema ademas de estar disponible en la nube, puede ser instalado en un servidor local, donde cualquier universidad, institucion o escuela, mediante su intranet, puede hacer uso de este sistema.
Por lo tanto, el sistema debera ser adaptable para que pueda ser instalado en un servidor local. Algo asi como wordpress que cuenta su servicio en la nube y tambien se puede instalar en cualquier servidor para su uso.

Dato a tener  en cuenta: En cada curso puede haber un foro de discusion

*Esta sección esta sujeta a futuras revisiones.*

### Recursos

Generate documentation for Api Endpoints: https://swagger.io/

The Node.js best practices list: https://github.com/goldbergyoni/nodebestpractices

An API documentation generator for JavaScript: https://github.com/jsdoc/jsdoc

## Contribuir

Si desea contribuir con nosotros, pongase en contacto.
