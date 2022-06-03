import crypto from "crypto"
import fs from "fs"
import path from "path"
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

export const calculateHash = async () => {
    const fileBuffer = fs.readFileSync(`${path.dirname(__filename)}/files/fileToCalculateHashFor.txt`);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
};

calculateHash()