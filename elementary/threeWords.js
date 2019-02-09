function threeWords(data) {
    let dataArray = data.split(" ");
    let wordsCounter = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (!/^\d+$/.test(dataArray[i])) {
            wordsCounter++;
            if (wordsCounter > 2) {
                break;
            }
            if (/^\d+$/.test(dataArray[i + 1])) {
                wordsCounter = 0;
            }
        } else {

        }
    }
    return wordsCounter > 2;
}

console.log(threeWords("Hello World jkhkjh 2 sdfsfd"));