const fs = require('fs').promises;

let lista1 = [];
let lista2 = [];

fs.readFile('input.txt', 'utf-8')
    .then((text) => {
        var allInputs = text.trim();
        allInputs = allInputs.replace(/\s+/g, ' ');
        allInputs = allInputs.split(" ");

        for (var i = 0; i < allInputs.length; i++) {
            if (i % 2 === 0 || i === 0) {
                lista1.push(Number(allInputs[i]))
            } else {
                lista2.push(Number(allInputs[i]))
            }
        }
        lista1.sort(function (a, b) { return a - b })
        lista2.sort(function (a, b) { return a - b })

        console.log(lista1, "/nfim lista1")
        console.log(lista2, "/nfim lista2")

        let result = 0;
        let similaty = 0;
        let temp = 0;

        for (var i = 0; i < lista1.length; i++) {
            if (lista1[i] >= lista2[i]) {
                result += lista1[i] - lista2[i]
            } else {
                result += lista2[i] - lista1[i]
            }
        }

        for (var i = 0; i < lista1.length; i++) {
            for (var index = 0; lista2[index] <= lista1[i]; index++) {
                if (lista1[i] === lista2[index]) {
                    temp += lista1[i]
                }
                similaty += temp
                temp = 0;
            }
        }

        console.log(result)
        console.log(similaty)

    })


