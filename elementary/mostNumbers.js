function mostNumbers(...numbers){
    let min = numbers[0];
    let max = numbers[0];
    if (numbers.length === 0) return 0;
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max - min;
}

console.log(mostNumbers(1, 2, 3));