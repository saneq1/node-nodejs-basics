import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export const read = async () => {
    fs.access(`${path.dirname(__filename)}/files/fileToRead.txt`, function(no_access){ // проверка на наличие папки
        if (no_access) {
            throw "FS operation failed - no field"
        } else {
            let fileContent = fs.readFileSync(`${path.dirname(__filename)}/files/fileToRead.txt`, 'utf8');
            console.log(fileContent);
        }
    })
};

read()