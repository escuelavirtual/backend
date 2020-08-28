const express = require("express");
const router = express.Router();
const {verifyToken} = require("../middlewares/is-auth");
const searchController = require("../controllers/searchController");
const searchCategoryController = require("../controllers/searcherCategoryController");

router.get("/search", verifyToken, searchController.searcher);
router.get("/search/category/:category", verifyToken, searchCategoryController.searcher)

module.exports = router;
