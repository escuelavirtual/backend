const { Router } = require('express');
const router = Router();
const CoursesController =require('../../controllers/coursesController');
const {verifyToken}=require('../middlewares/is-auth');


router.post('/',verifyToken, CoursesController.createCourse);
router.delete('/:id',verifyToken, CoursesController.deleteCourse);
router.put('/:id',verifyToken, CoursesController.updateCourse);
router.get('/', CoursesController.searchCourse);

module.exports = router;