const {Router}=require('express');
const ListCategory = require("../controllers/CategoryController.js")

const router = Router();

router.get('/',ListCategory.listcategory);

module.exports=router;