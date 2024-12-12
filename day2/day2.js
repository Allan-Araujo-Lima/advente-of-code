const fs = require('fs').promises;

fs.readFile('input2.txt', 'utf-8')
    .then((text) => {
        function processData(a, b, c, d, e) {
            if (d == 2) return false;

            if (Array.isArray(a) && a.length > 1) {
                if (c === true) {
                    if (a[b + 1] > a[b] && a[b] - a[b + 1] >= -3) {
                        deletes.push(a.shift())
                        console.log(deletes)
                        return processData(a, 0, true, d, deletes)
                    }
                    a.shift()
                    d++
                    if (d == 2) return false;
                    return processData(deletes.concat(a), 0, true, d, deletes)
                } else if (c === false) {
                    if (a[b + 1] < a[b] && a[b] - a[b + 1] <= 3) {
                        deletes.push(a.shift())
                        console.log(deletes)
                        return processData(a, 0, false, d, deletes)
                    }
                    a.shift()
                    d++
                    if (d == 2) return false;
                    return processData(deletes.concat(a), 0, true, d)
                }
            }
            return true;
        }

        let allInputs = text.replace(/\s/g, ";");
        allInputs = allInputs.replace(/;;/g, ",");
        allInputs = allInputs.split(",")

        let newAllInputs = []

        for (var i = 0; i < allInputs.length; i++) {
            newAllInputs.push(allInputs[i].split(";").map(Number))
        }

        let safe = 0;

        for (var i = 0; i < newAllInputs.length; i++) {
            if (newAllInputs[i][0] < newAllInputs[i][1]) {
                safe += processData(newAllInputs[i], 0, true) ? 1 : 0
            } else if (newAllInputs[i][0] > newAllInputs[i][1]) {
                safe += processData(newAllInputs[i], 0, false) ? 1 : 0
            }
        }

        console.log(safe)
    })