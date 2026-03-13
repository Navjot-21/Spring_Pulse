const express = require("express");
const router = express.Router();
const auth = require("../../middleware/authMiddleware");
const { registerSpring, submitWeeklyData } = require("../../controllers/villager/springController");
const { getMySprings, getSpringDetail, getSpringHistory } = require("../../controllers/villager/springQueryController");

router.post("/register", auth, registerSpring);
router.post("/weekly-data", auth, submitWeeklyData);
router.get("/my-springs", auth, getMySprings);
router.get("/:id", auth, getSpringDetail);
router.get("/history/:springId", auth, getSpringHistory);

module.exports = router;