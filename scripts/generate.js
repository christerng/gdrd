function generate4DNumber() {
    return Math.floor(Math.random() * 10000);
}

function pad4DNumber(number) {
    return number.toString().padStart(4, '0');
}