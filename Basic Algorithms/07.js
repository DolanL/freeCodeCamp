function truncateString(str, num) {
    let current_str = ''
    if (str.length > num) {
        current_str += str.slice(0, num) + '...';
    } else {
        return str;
    }
    return current_str;
}