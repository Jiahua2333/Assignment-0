function frequencyCounter(word) {
  // Insert code here;
    let chars = [], counters = [];
    let result = {};
    for (let i = 0; i < word.length; i++) {
        if (chars.length == 0) {
            chars.push(word.charAt(i));
            counters.push(1);
        }
        else {
            let isAdd = true;
            for (let j = 0; j < chars.length; j++) {
                if (chars[j] == word.charAt(i)) {
                    //chars.push(word.charAt(i));
                    counters[j]++;
                    isAdd = false;
                    continue;
                }
            }
            if (isAdd) {
                chars.push(word.charAt(i));
                counters.push(1);
            }
        }
    }
    //console.log(chars.length);
    for (let i = 0; i < chars.length; i++) {
        let key = chars[i];
        result[key] = counters[i];
    }
    //console.log(chars.length);

    return result;
    
}

// Do not edit this line;
module.exports = frequencyCounter;