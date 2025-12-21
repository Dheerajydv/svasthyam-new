import { Router } from "express";

const router = Router();

router.get("/get-report", (req, res) => {
  res.send("sample html")
});

export default router;