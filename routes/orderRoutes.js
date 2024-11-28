const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Routes for order operations

router.get("/all", orderController.getOrders);
router.put("/update/:id", orderController.updateOrder);

module.exports = router;
