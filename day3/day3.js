const fs = require('fs').promises;

fs.readFile('input.txt', 'utf-8')
    .then((text) => {
        let b = text.split('mul')
        for (var i = 0; i < b.length; i++) {
            b[i].split(')')
        }
        console.log(b)
    })