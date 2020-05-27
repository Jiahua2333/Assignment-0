function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
    let len = arr.length;
    let counter = 0;
    for (let i = 0; i < len; i++) {
        if (typeof (arr[i]) === 'boolean' || typeof (arr[i]) === 'string') counter++;
    }

    return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;