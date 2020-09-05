# Backend - Plataforma de aprendizaje en linea

![Node.js CI](https://github.com/escuelavirtual/backend/workflows/Node.js%20CI/badge.svg?branch=dev)
[![Coverage Status](https://coveralls.io/repos/github/escuelavirtual/backend/badge.svg?branch=dev)](https://coveralls.io/github/escuelavirtual/backend?branch=dev)
## Contenido

### Configuración del proyecto

Para instalar este proyecto, clona el repositorio.

Luego en tu terminal:
* `cd ruta/a/su/clon`
* `npm install`

Cambie el nombre del archivo ubicado en el directorio principal `.env.example` a` .env` si aún no lo ha hecho. Configure las credenciales de acceso a tu base de datos, previamente debes tener instalado y corriendo **mysql** en tu computadora.

Ejecutar las migraciones:

* `npx sequelize-cli db:migrate`

Iniciar el servidor:

* `node .`

Para ejecutar los tests:

* `npm test`


¡Y debería estar listo para comenzar!

### Convenciones

Se debe utilizar el idioma ingles para nombrar a las clases, variables y constantes, nombre de funciones, etc. Los nombres de las clases (javascript)

Se utilizara el estilo camelCase para los nombres de las variables y funciones.

Ejemplos:
```
firstName = 'Alejandro'
schoolName = 'Belgrano'

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

Se ha movido esta sección a la documentación del proyecto

### Recursos

Generate documentation for Api Endpoints: https://swagger.io/

The Node.js best practices list: https://github.com/goldbergyoni/nodebestpractices

An API documentation generator for JavaScript: https://github.com/jsdoc/jsdoc

## Contribuir

Si desea contribuir con nosotros, lea  nuestro [CONTRIBUTING.md](https://github.com/escuelavirtual/backend/blob/master/CONTRIBUTING.md)
