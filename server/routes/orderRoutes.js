const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/order/orderControllers");

router.post("/postorder", orderControllers.createOrder);
router.get("/vieworder", orderControllers.getAllOrders);
router.delete("/delete/:id", orderControllers.deleteOrder);
router.patch("/update/:id", orderControllers.updateOrder);

module.exports = router;
