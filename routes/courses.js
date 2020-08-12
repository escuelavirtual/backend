const {Router}=require('express');
const router = Router();

const {createCourse}=require('../controllers/coursesController');

router.post('/', createCourse);

module.exports=router;