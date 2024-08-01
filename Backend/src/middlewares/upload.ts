import multer from "multer";

const storageUp = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `${__dirname}/../upload.ts`;
    cb(null, path);
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});

export const uploadStorage = multer({
  storage: storageUp,
});

export default uploadStorage;