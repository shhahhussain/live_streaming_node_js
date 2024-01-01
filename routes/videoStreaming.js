const { Router } = require("express");
const router = Router();

// Middlewares

// Controllers
const videocontroller = require("../controllers/videoStreaming");

// Routes

router.get("/videos", videocontroller.videoPlayer);
router.get("/live", videocontroller.liveStreaming);

module.exports = router;
