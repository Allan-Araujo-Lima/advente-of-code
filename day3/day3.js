const fs = require('fs').promises;

const regex = /mul[(](\w+,\w+[)])/g;

fs.readFile('input.txt', 'utf-8')
    .then((text) => {
        let input = []
        let newInput = []
        let start = 0;
        let lastAppear = 'do()'
        input = (text.match(regex));

        for (var i = 0; i < input.length; i++) {
            let prov = String(input[i]).substring(4, input[i].length - 1)
            let end = text.indexOf(input[i])

            let doo = text.substring(start, end).lastIndexOf("do()")
            let dont = text.substring(start, end).lastIndexOf("don't()")

            if (doo > dont) {
                lastAppear = "do()"
                newInput.push(prov.split(',').map(Number))
            } else if (doo < dont) {
                lastAppear = "don't()"
            } else {
                lastAppear === "do()" ? newInput.push(prov.split(',').map(Number)) : null
            }

            console.log(prov, lastAppear)
            start = end
        }

        let result = 0;

        for (var i = 0; i < newInput.length; i++) {
            result += newInput[i][0] * newInput[i][1]
        }

        console.log(result)
    })