import {Router} from 'express';
import {createCourse,deleteCourse,updateCourse,searchCourse} from '../controllers/coursesController';
import {verifyToken} from '../middlewares/is-auth';
const router = Router();


router.post('/',verifyToken, createCourse);
router.delete('/:id',verifyToken,deleteCourse);
router.put('/:id',verifyToken,updateCourse);
router.get('/',searchCourse);
module.exports=router;