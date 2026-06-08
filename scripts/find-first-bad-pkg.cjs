const fs = require('fs');
const path = require('path');
let found=false;
function walk(dir){
  for(const f of fs.readdirSync(dir)){
    if(found) return;
    const p = path.join(dir,f);
    try{
      const s = fs.statSync(p);
      if(s.isDirectory()) walk(p);
      else if(f==='package.json'){
        try{
          const j = JSON.parse(fs.readFileSync(p,'utf8'));
          if(!j.version || typeof j.version !== 'string' || j.version.trim()===''){
            console.log('BAD:'+p);
            console.log('CONTENT:\n'+fs.readFileSync(p,'utf8'));
            found=true; return;
          }
        }catch(e){
          console.error('ERR',p,e.message); found=true; return;
        }
      }
    }catch(e){/* ignore */}
  }
}
walk(process.cwd());
if(!found) console.log('NONE');
