import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = new URL('../dist', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain','.json':'application/json'};
const port=Number(process.env.PORT)||4173;
createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=normalize(join(root,path));if(!file.startsWith(normalize(root)))throw new Error('Forbidden');if((await stat(file).catch(()=>null))?.isDirectory())file=join(file,'index.html');const data=await readFile(file);res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(data)}catch{const data=await readFile(join(root,'404.html'));res.writeHead(404,{'content-type':'text/html; charset=utf-8'});res.end(data)}}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
