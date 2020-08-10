const express = require("express");
const router = express.Router();
const is_auth = require("../middlewares/is-auth");
const searchController = require("../controllers/searchController");
const searchCategoryController = require("../controllers/searcherCategoryController");

router.get("/search", is_auth, searchController.searcher);
router.get("/searchCategory/:category", is_auth, searchCategoryController.searcher)

module.exports = router;