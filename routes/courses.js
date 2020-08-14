const {Router}=require('express');
const router = Router();

const {createCourse,deleteCourse,updateCourse,searchCourse}=require('../controllers/coursesController');
router.post('/', createCourse);
router.delete('/:id',deleteCourse);
router.put('/:id',updateCourse);
router.get('/',searchCourse);
module.exports=router;