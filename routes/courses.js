const {Router}=require('express');
const router = Router();

const {createCourse,deleteCourse}=require('../controllers/coursesController');
router.post('/', createCourse);
router.delete('/:id',deleteCourse);
module.exports=router;