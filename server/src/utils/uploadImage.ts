import cloudinary from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config";

cloudinary.v2.config({
  api_key: API_KEY,
  api_secret: API_SECRET,
  cloud_name: CLOUD_NAME,
});

const uploadImage = async (file: string) => {
  try {
    const res = await cloudinary.v2.uploader.upload(file, {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: "auto",
      transformation: [{ width: 250, height: 250 }],
    });

    return res.secure_url;
  } catch (error) {
    console.log(`Image upload failed:`, error);
  }
};

export { uploadImage };
