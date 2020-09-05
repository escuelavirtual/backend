
module.exports = function(app) {

    const WEB_BASE_URL = "/web";

    const routes = [ 
        //{ path: "/directory", view: "directory" },
        //{ path: "/professors", file: "./professors" },
        //{ path: "/courses",  file: "./courses" },
        //{ path: "/login", file: "./login" },
        //{ path: "/category", file: "./category" },
     ];


  


    app.get(WEB_BASE_URL + '/directory', (req, res) => {
        res.render('directory'); 
    });

    app.get(WEB_BASE_URL + '/search', (req, res) => {
        res.render('search'); 
    });

    app.get(WEB_BASE_URL + '/courses/details', (req, res) => {
        res.render('course-detail'); 
    });

    app.get(WEB_BASE_URL + '/courses/document/text', (req, res) => {
        res.render('course-content'); 
    });

    app.get(WEB_BASE_URL + '/courses', (req, res) => {
        res.render('courses'); 
    });

    app.get(WEB_BASE_URL, (req, res) => {
        res.render('home'); 
    });

}