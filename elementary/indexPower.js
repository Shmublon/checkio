function indexPower(array, n) {
    if (n >= array.length) {
        return -1;
    }
    return power(array[n], n);
}

function power(number, power) {
    if (power === 0) return 1;
    let result = number;
    for (let i = 0; i < power - 1; i++) {
        result = result * number;
    }
    return result;
}


console.log(indexPower([1, 2, 3, 4], 2));