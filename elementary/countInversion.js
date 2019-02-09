function countInversion(sequence) {
    let inversionCount = 0;
    for (let i = 0; i < sequence.length; i++) {
        for (let j = i; j < sequence.length; j++) {
            if (i !== j && sequence[i] > sequence[j]) {
                inversionCount++;
            }
        }
    }
    return inversionCount;
}

console.log(countInversion([1, 2, 5, 3]));