import multer from "multer";

import path  from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../UploadedContaint'));                //  this is the updated code for resolution of the path
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

export const upload = multer({ 
    storage, 
})
  