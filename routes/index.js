const { Router } = require("express");
const router = Router();

// Routers
const userRouter = require("./user");
const testRouter=require("./test")
const videoRouter=require("./videoStreaming")

router.use("/videos",videoRouter)
router.use("/test", testRouter);
router.use("/users", userRouter);

module.exports = router;
