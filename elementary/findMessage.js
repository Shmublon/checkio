function findMessage(data) {
    let dataArray = data.split("");
    let message = "";
    for (let i = 0; i < dataArray.length; i++) {
        if (/[A-Z]/.test( dataArray[i])) {
            message = message + dataArray[i];
        }
    }
    return message;
}

console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."));