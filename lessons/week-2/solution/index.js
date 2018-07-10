const convertSync = require('./convert-sync');
const convert = require('./convert');

//convertSync('test');
convert('test', err => {
    if (err) {
        console.err(err);
    }
    
    console.log('File converted successfully');
});
