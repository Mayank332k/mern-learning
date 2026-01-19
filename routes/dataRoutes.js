const controller = require("../controllers/dataController");
const express = require("express");
const router = express.Router();

router.get("/data", controller.getAllData);
router.post("/data", controller.createData);
router.put("/data/:id", controller.updateData);
router.delete("/data/:id", controller.deleteData);

module.exports = router;
