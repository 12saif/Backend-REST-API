const express = require("express");
const router = express.Router();

const { getAllProducts, getAllProductsTesting } = require("../controllers/productsControllers");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;