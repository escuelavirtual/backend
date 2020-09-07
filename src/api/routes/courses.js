const { Router } = require('express');
const router = Router();
const CoursesController = require('../../controllers/coursesController');
const { verifyToken } = require('../middlewares/is-auth');
const { validator } = require('../middlewares/validator');
const CourseService = require('../../services/courseService');


router.post('/', [verifyToken, validator(CourseService.validate())], CoursesController.createCourse);
router.delete('/:id', verifyToken, CoursesController.deleteCourse);
router.put('/:id', verifyToken, CoursesController.updateCourse);
router.get('/', CoursesController.searchCourse);

module.exports = router;