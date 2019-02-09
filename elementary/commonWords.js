function commonWords(first, second) {
    let firstWords = first.split(",");
    let secondWords = second.split(",");
    let resultArray = [];
    for (let i = 0; i < firstWords.length; i++) {
        for (let j = 0; j < secondWords.length; j++) {
            if (firstWords[i] === secondWords [j]) {
                resultArray.push(firstWords[i]);
            }
        }
    }

    for (let i = 0; i < resultArray.length; i++) {
        for (let j = i; j < resultArray.length; j++) {
            if (resultArray[i] > resultArray[j]) {
                let tmp = resultArray[i];
                resultArray[i] = resultArray[j];
                resultArray[j] = tmp;
            }
        }
    }

    let result = "";
    for (let i = 0; i < resultArray.length; i++) {
        result = result + resultArray[i] + ",";
    }
    result = result.substr(0, result.length - 1);
    return result;
}

console.log(commonWords("one,two,three", "four,five,one,two,six,three"));