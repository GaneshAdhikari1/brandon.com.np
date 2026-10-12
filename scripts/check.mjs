import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { routes } from '../src/site-config.mjs';
const root = new URL('..', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const dist=join(root,'dist'); let failures=[];
for(const [route] of routes){const file=route==='/'?join(dist,'index.html'):join(dist,route.slice(1),'index.html');try{const html=await readFile(file,'utf8');for(const token of ['<title>','<meta name="description"','<main id="main">','/assets/styles.css','/assets/app.js'])if(!html.includes(token))failures.push(`${route}: missing ${token}`);}catch{failures.push(`${route}: missing output file`)}}
for(const file of ['assets/styles.css','assets/app.js','sitemap.xml','robots.txt','404.html'])try{await stat(join(dist,file))}catch{failures.push(`missing ${file}`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`Checked ${routes.length} routes and core assets successfully.`);
