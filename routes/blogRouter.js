const express = require("express");
const router = express.Router();

const {
  init,
  showList,
  showDetails,
} = require("../controllers/blogController");

router.use("/", init);
router.get("/", showList);
router.get("/:id", showDetails);
// Define your routes here

module.exports = router;
