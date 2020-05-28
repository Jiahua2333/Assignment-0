function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        let res = [...args[i]];
        arr = arr.concat(res);
        //console.log(arr);
    }
    let iterable = new Set(arr);
    //console.log(arr);
    let result = new Set();
    for (const value of iterable) {
        result.add(value);
        
    }
    
    return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;