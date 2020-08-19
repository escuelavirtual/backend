const {Router}=require('express');
const router = Router();
const {createCourse,deleteCourse,updateCourse,searchCourse}=require('../controllers/coursesController');
const {verifyToken}=require('../middlewares/is-auth');

router.post('/',verifyToken, createCourse);
router.delete('/:id',verifyToken,deleteCourse);
router.put('/:id',verifyToken,updateCourse);
router.get('/',searchCourse);
module.exports=router;