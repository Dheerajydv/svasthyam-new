import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePaths) => {
  if (!localFilePaths || localFilePaths.length === 0) return [];

  try {
    // Upload all files in parallel
    const uploadResults = await Promise.all(
      localFilePaths.map((filePath) =>
        cloudinary.uploader.upload(filePath, {
          resource_type: "image",
          folder: "reports", // optional: organizes uploads in a folder
          transformation: [
            { width: 1200, crop: "limit", quality: "auto" },
          ], // optional optimization
        })
      )
    );

    // Clean up all local files asynchronously
    await Promise.all(
      localFilePaths.map(
        (filePath) => fs.unlink(filePath).catch(() => null) // ignore errors if already deleted
      )
    );

    console.log("✅ All images uploaded successfully to Cloudinary");
    return uploadResults.map((file) => file.secure_url); // contains secure_url, public_id, etc.
  } catch (error) {
    // Attempt to clean up files if upload fails
    await Promise.all(
      localFilePaths.map((filePath) =>
        fs.unlink(filePath).catch(() => null)
      )
    );
    console.error("❌ Error uploading to Cloudinary:", error);
    return [];
  }
};

export { uploadOnCloudinary };