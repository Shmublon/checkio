function evenLast(data) {
    if (data.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            sum = sum + data[i];
        }
    }
    return sum * data[data.length - 1];
}

console.log(evenLast([5]));