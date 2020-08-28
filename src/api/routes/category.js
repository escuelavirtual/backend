const { Router } = require('express');
const CategoryController = require("../../controllers/categoryController.js")

const router = Router();

router.get('/', CategoryController.listCategories);

module.exports = router;