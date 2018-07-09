const fs = require('fs');

const markdown = fs.readFileSync('./test.md', 'utf8');
const markdownLines = markdown.split('\n');
const htmlLines = markdownLines.map(line => {
    if (line.startsWith('# ')) {
        return `<h1>${line.split('# ')[1]}</h1>`
    }

    return line;
});

fs.writeFileSync('./test.html', htmlLines.join('\n'));
