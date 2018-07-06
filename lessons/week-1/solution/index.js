const fs = require('fs');

const markdown = fs.readFileSync('./test.md', 'utf8');
const lines = markdown.split('\n');
const output = lines.map(line => {
    if (line.startsWith('# ')) {
        return `<h1>${line.split('# ')[1]}</h1>`
    }

    return line;
});

fs.writeFileSync('./test.html', output.join('\n'));
