import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "../public/temp");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, uploadDir);
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage });