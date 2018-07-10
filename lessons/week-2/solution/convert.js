const fs = require('fs');

function convert(filename, callback) {
    fs.readFile(`./${filename}.md`, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }

        const markdownLines = data.split('\n');
        const htmlLines = markdownLines.map(line => {
            if (line.startsWith('# ')) {
                return `<h1>${line.split('# ')[1]}</h1>`
            }
        
            return line;
        });
        
        fs.writeFile(`./${filename}.html`, htmlLines.join('\n'), (err) => {
            if (err) {
                return callback(err);
            }

            callback();
        });
    });
}

module.exports = convert;
