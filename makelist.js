const fs = require('fs');
const path = require('path');

const dirTree = ('./img');
const diretoryTreeToObj = (dir,done) => {
  const results = [];

  fs.readdir(dir,(err,list) => {
    if (err) { return done(err); }

    let pending = list.length;

    if (!pending) {
      return done(null,{ name: path.basename(dir),type: 'folder',children: results });
    }
    list.forEach((file) => {
      file = path.resolve(dir,file);
      fs.stat(file,(err,stat) => {

        if (path.basename(file).charAt(0) === '.') {
          if (!--pending) { done(null,results); }
        } else if (stat && stat.isDirectory()) {
          diretoryTreeToObj(file,(err,res) => {
            results.push({
              name: path.basename(file),
              type: 'folder',
              children: res
            });
            if (!--pending) { done(null,results); }
          });
        } else {
          results.push({
            type: 'file',
            name: path.basename(file),
            size: `${Math.round(stat.size / 1000)}kb`
          });
          if (!--pending) { done(null,results); }
        }
      });
    });
  });
};

diretoryTreeToObj(dirTree,(err,res) => {
  if (err) { console.error(err); }
  // console.log(JSON.stringify(res));
  fs.writeFile('./_data/list.json',JSON.stringify(res),(err) => {
    if (err) { return console.log(err); }
  });
});
