import fs from "fs"
import path from "path"
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

export const read = async () => {
    fs.createReadStream(`${path.dirname(__filename)}/files/fileToRead.txt`,{encoding:'utf-8'}).pipe(process.stdout);
};


read()