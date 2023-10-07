import {diskStorage} from "multer";
import * as path from 'path';

const multerConfig = {
    storage: diskStorage({
        destination: "./upload/files",
        filename: (req, file, callback) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension = path.parse(file.originalname).ext;

            callback(null, `${filename}.${extension}`);
        }
    })
}

export default  multerConfig;