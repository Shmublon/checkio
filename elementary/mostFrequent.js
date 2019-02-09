function mostFrequent(data) {
    let mostF = '';
    let maximum = 0;
    for (let i = 0; i < data.length; i++) {
        let currentFrequency = frequency(data[i], data);
        if (currentFrequency > maximum) {
            maximum = currentFrequency;
            mostF = data[i];
        }
    }
    return mostF;
}

function frequency(str, array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === str) {
            counter++;
        }
    }
    return counter;
}

console.log(mostFrequent([
    'a', 'b', 'c',
    'b', 'b',
    'a'
]));