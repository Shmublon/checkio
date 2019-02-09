function digitsMultip(data) {
    let dataArray = data.toString().split("");
    let result = 1;
    for (let i = 0; i < dataArray.length; i++) {
        let number = parseInt(dataArray[i]);
        if (number !== 0) {
            result = result * number;
        }
    }
    return result;
}

console.log(digitsMultip(123405));