import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);



export const copy = async () => {
    fs.access(`${path.dirname(__filename)}/files`, function(no_access){ // проверка на наличие папки
        if (no_access) {
            throw no_access
        } else {
         fs.access(`${path.dirname(__filename)}/files_copy`, function(no_files_copy_access){ // проверка на наличие папки
                if (no_files_copy_access) {
                    // here
                    fs.mkdir(`${path.dirname(__filename)}/files_copy`, err => { //создание папки
                        if(err) throw "FS operation failed - no create field"; 
                        else {
                            fs.cpSync(`${path.dirname(__filename)}/files`, `${path.dirname(__filename)}/files_copy`, {recursive: true}) //копирование содержимого папки в папку
                        }
                     });
                } else {
                    throw no_files_copy_access
                }
            })
        }
    })
};

copy()

