
module.exports = function(app) {

    const WEB_BASE_URL = "/web";

    const routes = [ 
        //{ path: "/user", file: "./user" },
        //{ path: "/professors", file: "./professors" },
        //{ path: "/courses",  file: "./courses" },
        //{ path: "/login", file: "./login" },
        //{ path: "/category", file: "./category" },
     ];

     routes.forEach( route => {
        app.use(WEB_BASE_URL + route.path, require(route.file));
     });

    app.get(WEB_BASE_URL, (req, res) => {
        res.render('home'); 
    });

}