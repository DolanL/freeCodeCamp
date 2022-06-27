function largestOfFour(arr) {
    const array = [];
    let num;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > num) {
                num = arr[i][j]
            }
        }
        array.push(num);
    }
    return array;
}