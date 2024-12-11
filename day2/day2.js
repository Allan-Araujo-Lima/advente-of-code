const fs = require('fs').promises;

minDiffer = 1;
maxDiffer = 3;

fs.readFile('input2.txt', 'utf-8')
    .then((text) => {
        let allInputs = text.replace(/\s/g, ";");
        allInputs = allInputs.replace(/;;/g, ",");
        allInputs = allInputs.split(",")

        let newAllInputs = []

        for (var i = 0; i < allInputs.length; i++) {
            newAllInputs.push(allInputs[i].split(";").map(Number))
        }

        let safe = 0;
        let isSafe = false;
        let increasing = undefined;

        for (var i = 0; i < newAllInputs.length; i++) {
            if (newAllInputs[i][0] < newAllInputs[i][1]) {
                increasing = true;
            } else if (newAllInputs[i][0] > newAllInputs[i][1]) {
                increasing = false;
            } else {
                increasing = undefined;
            }
            for (let index = 1; index < newAllInputs[i].length - 1; index++) {
                isSafe = false;
                if (increasing === true) {
                    if (newAllInputs[i][index] - newAllInputs[i][index + 1] < -3 ||
                        newAllInputs[i][index] >= newAllInputs[i][index + 1]
                    ) {
                        break
                    }
                } else if (increasing === false) {
                    if (newAllInputs[i][index] - newAllInputs[i][index + 1] > 3 ||
                        newAllInputs[i][index] <= newAllInputs[i][index + 1]
                    ) {
                        break
                    }
                } else {
                    break
                }
                isSafe = true
            }
            if (isSafe === true) {
                safe++
            }
            console.log(safe)
        }
    })