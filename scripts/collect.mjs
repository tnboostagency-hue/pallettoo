import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
const pages=['/','/about-us/','/products/','/contact-us/','/product/pallettoo-110120/','/product/pallettoo-1100110/','/product/pallettoo-100120/'];
await fs.mkdir('source-site',{recursive:true}); await fs.mkdir('public/assets',{recursive:true});
const urls=new Set();
for(const route of pages){const html=await fetch('https://pallettoo.com'+route).then(r=>r.text()); const name=route.replaceAll('/','_')||'home';await fs.writeFile('source-site/'+name+'.html',html); for(const match of html.matchAll(/https:\/\/pallettoo\.com\/wp-content\/[^\s"'<>]+?\.(?:png|jpe?g|webp|woff2|mp4)/gi))urls.add(match[0]);}
const manifest=[];const queue=[...urls];
await Promise.all(Array.from({length:5},async()=>{while(queue.length){const url=queue.shift();try{const r=await fetch(url);if(!r.ok)throw Error(r.status);const contentType=r.headers.get('content-type')||'';if(contentType.includes('text/html'))throw Error('HTML instead of asset');const ext=path.extname(new URL(url).pathname);const file=createHash('sha1').update(url).digest('hex').slice(0,12)+ext;await fs.writeFile('public/assets/'+file,Buffer.from(await r.arrayBuffer()));manifest.push({url,file:'/assets/'+file,contentType});}catch(e){console.log('Failed',url,e.message)}}}));
await fs.writeFile('source-site/assets.json',JSON.stringify(manifest,null,2));console.log('Saved assets:',manifest.length);
