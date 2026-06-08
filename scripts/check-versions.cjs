const fs = require('fs');
const path = require('path');
function walk(dir){
  for(const f of fs.readdirSync(dir)){
    const p = path.join(dir,f);
    try{
      const s = fs.statSync(p);
      if(s.isDirectory()) walk(p);
      else if(f==='package.json'){
        try{
          const j = JSON.parse(fs.readFileSync(p,'utf8'));
          if(!j.version || typeof j.version !== 'string' || j.version.trim()==='')
            console.log(p+' -> '+JSON.stringify(j.version));
        }catch(e){
          console.error('ERR',p,e.message);
        }
      }
    }catch(e){/* ignore */}
  }
}
walk(process.cwd());
