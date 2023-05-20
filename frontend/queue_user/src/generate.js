function generate4DNumber() {
    return Math.floor(Math.random() * 10000);
}

function pad4DNumber() {
    return generate4DNumber().toString().padStart(4, '0');
}

module.exports = pad4DNumber;