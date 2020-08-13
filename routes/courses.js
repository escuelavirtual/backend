const {Router}=require('express');
const router = Router();

const {createCourse,deleteCourse,updateCourse}=require('../controllers/coursesController');
router.post('/', createCourse);
router.delete('/:id',deleteCourse);
router.put('/:id',updateCourse);
module.exports=router;