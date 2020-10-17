const listEndpoints = require('express-list-endpoints');

module.exports = function(app) {

    const API_BASE_URL = "/api/v1";


    const routes = [
        { path: "/students", file: "./students" },
        { path: "/professors", file: "./professors" },
        { path: "/courses", file: "./courses" },
        { path: "/login", file: "./login" },
        { path: "/category", file: "./category" },
        { path: "/answer", file: "./answers" },
        { path: "/question", file: "./questions" },
        { path: "/exam", file: "./exams" },
        { path: "/enrollment", file: './enrollment'}
    ];

    routes.forEach(route => {
        app.use(API_BASE_URL + route.path, require(route.file));
    });


    app.use((error, req, res, next) => {
        console.log(error);
        const status = error.statusCode || 500;
        const message = error.message;
        const data = error.data;
        res.status(status).json({ message: message, data: data });
    });

    app.get("/", (req, res) => {
        res.send(listEndpoints(app));
    });

}