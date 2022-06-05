import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export const rename = async () => {
    fs.access(`${path.dirname(__filename)}/files/wrongFilename.txt`, function(no_access){ // проверка на наличие файла
        if (no_access) {
            throw "FS operation failed - no files"
        } else {
            fs.rename(`${path.dirname(__filename)}/files/wrongFilename.txt`, `${path.dirname(__filename)}/files/properFilename.md`, err => { //переименовывание файла
                if(err) throw "FS operation failed - no rename file"; 
                console.log('Файл успешно переименован');
             });
        }
    })
};

rename()