function nonUniqueElements(data) {
    let nonUniqueArray = [];
    for (let i = 0; i < data.length; i++) {
        let nonUnique = false;
        for (let j = 0; j < data.length; j++) {
            if (i !== j && data[i] === data[j]) {
                nonUnique = true;
            }
        }
        if (nonUnique) {
            nonUniqueArray.push(data[i]);
        }
    }
    return nonUniqueArray;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));