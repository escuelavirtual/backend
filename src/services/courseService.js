const { body } = require('express-validator');

class CourseService {

    static validate(){

        return [
            body('title').isLength({ min: 3 }),
            body('description').isLength({ min: 6 })
        ];
    }
}

module.exports = CourseService;