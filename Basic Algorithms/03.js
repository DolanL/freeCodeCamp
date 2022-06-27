function findLongestWordLength(str) {
    let count = 0;
    let count_current_str = 0;
    for (let i = 0; i < str.length; i++) {
        count_current_str += 1;
        if (str[i] == ' ') {
            count_current_str = 0;
        }
        if (count_current_str > count) {
            count = count_current_str;
        }
    }
    return count;
}