import multer from "multer";
import e from "express";
import * as fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    fs.mkdir("/upload", () => {
      next(null, "upload/");
    });
  },
});

const fileFilter = (
  req: e.Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  const fileTypes = /\.(png|jpe?g|gif|svg|webp|ico|avif)$/i;

  if (fileTypes) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 5,
};

export const _muilter = multer({ storage, fileFilter, limits });
