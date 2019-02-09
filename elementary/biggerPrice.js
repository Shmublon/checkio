function biggerPrice(limit, data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[i].price < data[j].price) {
                let tmp = data[i];
                data[i] = data[j];
                data[j] = tmp;
            }
        }
    }

    let top = [];
    for (let i = 0; i < limit; i++) {
        top.push(data[i]);
    }
    return top;
}

console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]));