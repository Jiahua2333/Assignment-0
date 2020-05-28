function productOfAnyAmountOfNumbers(...args) {
    // Insert code here;
    let total = 1;
    let arr = args;
    for (let i = 0; i < arr.length; i++) total = total * arr[i];
    return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;