import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("its works");
});

export default router;