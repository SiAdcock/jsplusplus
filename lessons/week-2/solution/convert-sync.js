const fs = require('fs');

function convertSync(filename) {
    const markdown = fs.readFileSync(`./${filename}.md`, 'utf8');
    const markdownLines = markdown.split('\n');
    const htmlLines = markdownLines.map(line => {
        if (line.startsWith('# ')) {
            return `<h1>${line.split('# ')[1]}</h1>`
        }
    
        return line;
    });
    
    fs.writeFileSync(`./${filename}.html`, htmlLines.join('\n'));
}

module.exports = convertSync;
