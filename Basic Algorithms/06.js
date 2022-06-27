function repeatStringNumTimes(str, num) {
    let current_str = ''
    for (let i = 0; i < num; i++) {
        current_str += str;
    }
    return current_str;
}

console.log(repeatStringNumTimes("abc", 3));

