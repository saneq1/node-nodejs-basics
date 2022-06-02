import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export const list = async () => {
    fs.access(`${path.dirname(__filename)}/files`, function(no_access){ // проверка на наличие папки
        if (no_access) {
            throw "FS operation failed - no field"
        } else {
            fs.readdir(`${path.dirname(__filename)}/files`, (err, files) => { //считывание папки
                files.forEach(file => {
                  console.log(file);
                });
              })
        }
    })
};

list()