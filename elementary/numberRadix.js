let myMap = new Map();
myMap.set('A', 10);
myMap.set('B', 11);
myMap.set('C', 12);
myMap.set('D', 13);
myMap.set('E', 14);
myMap.set('F', 15);
myMap.set('G', 16);
myMap.set('H', 17);
myMap.set('I', 18);
myMap.set('J', 19);
myMap.set('K', 20);
myMap.set('L', 21);
myMap.set('M', 22);
myMap.set('N', 23);
myMap.set('O', 24);
myMap.set('P', 25);
myMap.set('Q', 26);
myMap.set('R', 27);
myMap.set('S', 28);
myMap.set('T', 29);
myMap.set('U', 30);
myMap.set('V', 31);
myMap.set('W', 32);
myMap.set('X', 33);
myMap.set('Y', 34);
myMap.set('Z', 35);

function numberRadix(str_number, radix) {
    let numberArray = str_number.split("");
    let result = 0;
    for (let i = 0; i < numberArray.length; i++) {
        let number;
        if (/[A-Z]/.test(numberArray[i])) {
            number = myMap.get(numberArray[i]);
        } else {
            number = parseInt(numberArray[i])
        }
        if (number >= radix) {
            result = -1;
            break;
        } else {
            result = result + number * pow(radix, (numberArray.length - i - 1));
        }
    }
    return result;
}

function pow(number, power) {
    if (power === 0) return 1;
    let result = number;
    for (let i = 0; i < power - 1; i++) {
        result = result * number;
    }
    return result;
}

console.log(numberRadix("36", 2));