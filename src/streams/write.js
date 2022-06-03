import fs from "fs"
import path from "path"
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

export const write = async () => {
    process.stdin.on("data", (data) => {
        fs.createWriteStream(`${path.dirname(__filename)}/files/fileToWrite.txt`).write(data);
      });
};

write()