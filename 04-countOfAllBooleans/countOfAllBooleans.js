function countOfAllBooleans(arr) {
  // Insert code here;
    let len = arr.length;
    let counter = 0;
    for (let i = 0; i < len; i++) {
        if (typeof (arr[i]) === 'boolean') counter++;
    }

    return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;