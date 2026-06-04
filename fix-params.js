const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
            walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetStr1 = "const { id } = params;";
const targetStr2 = "const { action } = params;";
const replacement1 = "const { id } = await params;";
const replacement2 = "const { action } = await params;";

walk(path.join(__dirname, 'src/app/api'), (filepath) => {
    if (filepath.endsWith('route.js')) {
        let content = fs.readFileSync(filepath, 'utf8');
        let modified = false;
        if (content.includes(targetStr1)) {
            content = content.replace(new RegExp(targetStr1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement1);
            modified = true;
        }
        if (content.includes(targetStr2)) {
            content = content.replace(new RegExp(targetStr2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement2);
            modified = true;
        }
        if (modified) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`Updated ${filepath}`);
        }
    }
});
