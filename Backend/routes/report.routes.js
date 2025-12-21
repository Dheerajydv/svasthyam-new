import { Router } from "express";
import {
  addReport,
  getReports,
  deleteReport,
} from "../controllers/report.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.post("/add-report", upload.array("reportImages", 5), addReport);
router.delete("/delete-report/:id", deleteReport);
router.get("/get-report", getReports);

export default router;