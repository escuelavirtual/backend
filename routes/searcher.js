const express = require("express");
const router = express.Router();
const SearchController = require("../controllers/SearchController");
const SearchCategoryController = require("../controllers/SearcherCategoryController");

router.get("/search", SearchController.searcher);
router.get("/search/category/:category", SearchCategoryController.searcher);

module.exports = router;
