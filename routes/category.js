const { Router } = require("express");
const Category = require("../controllers/CategoryController.js");

const router = Router();

router.get("/", Category.listcategory);

module.exports=router;