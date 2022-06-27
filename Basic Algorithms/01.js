function reverseString(str) {
    let reversestring = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversestring += str[i];
    }
    return reversestring;
}

