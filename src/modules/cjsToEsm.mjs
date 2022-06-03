import path from "path"
import { release, version } from "os"
import { createServer as createServerHttp } from "http"
import  './files/c.js'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject =  import('./files/b.json', { assert: { type: "json" } }) ;

} else {
     unknownObject =  import('./files/b.json', { assert: { type: "json" } }) ;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});


export {
    unknownObject,
    createMyServer,
}

