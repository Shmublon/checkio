function secondIndex(text, symbol) {
    let firstIndex = text.indexOf(symbol);
    if (firstIndex !== -1) {
        let textArray = text.split("");
        textArray.splice(firstIndex, 1);
        if (textArray.indexOf(symbol) !== -1) {
            return textArray.indexOf(symbol) + 1;
        } else {
            return undefined;
        }
    }
    return undefined;
}

console.log('Example');
console.log(secondIndex("sim", "s"));