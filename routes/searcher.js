const express = require("express");
const router = express.Router();
const is_auth = require("../middlewares/is-auth");
const searchController = require("../controllers/searchController");

router.get("/search", is_auth, searchController.search);

module.exports = router;