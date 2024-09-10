// import multer from "multer";
// // import kk from '../UploadedContaint'
// import path  from "path";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(__dirname, '../UploadedContaint'));                //  this is the updated code for resolution of the path
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

// export const upload = multer({ 
//     storage, 
// })
  



import multer from 'multer';
import { diskStorage } from 'multer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Manually define __dirname using fileURLToPath and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, resolve(__dirname, '../UploadedContaint'));  // Use the resolved __dirname
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
export const upload = multer({ 
    storage, 
})
