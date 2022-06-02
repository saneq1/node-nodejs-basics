import fs from 'fs'
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);


export const create = async () => {
    fs.access(`${path.dirname(__filename)}/files/fresh.txt`, function(access){ // проверка на наличие файла
        if (access) {
            fs.writeFile(`${path.dirname(__filename)}/files/fresh.txt`, "I am fresh and young", function(error){ // создание файла с текстом
                if(error) throw error; 
                console.log('Create file fresh.txt');
            });
        } else {
            throw "FS operation failed"
        }
    })
};

create()