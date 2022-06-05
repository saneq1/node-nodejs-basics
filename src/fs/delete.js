import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export const remove = async () => {
    fs.access(`${path.dirname(__filename)}/files/fileToRemove.txt`, function(no_access){ // проверка на наличие файла
        if (no_access) {
            throw "FS operation failed - no files"
        } else {
            fs.unlink(`${path.dirname(__filename)}/files/fileToRemove.txt`, err => { //удаление файла
                if(err) throw "FS operation failed"; 
                console.log('Файл успешно удален');
             });
        }
    })
};

remove()