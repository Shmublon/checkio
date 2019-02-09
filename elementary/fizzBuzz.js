function fizzBuzz(data) {
    if (data % 3 === 0) {
        if (data % 5 === 0) {
            return "Fizz Buzz";
        }
        return "Fizz"
    } else if (data % 5 === 0) {
        return "Buzz"
    }
    return data.toString();
}

console.log(fizzBuzz(11));