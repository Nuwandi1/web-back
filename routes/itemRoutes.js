const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/add", itemController.addItem);
router.get("/all", itemController.getItems);
router.put("/update/:id", itemController.updateItem);
router.delete("/delete/:id", itemController.deleteItem);

module.exports = router;
