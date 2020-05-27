function isPalindrome(word) {
  // Insert code here;
    let letter = /[^A-Za-z]/g;
    word = word.toLowerCase().replace(letter, '');
    let result = true;
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            result = false;
        }
    }
    return result;
}

// Do not edit this line;
module.exports = isPalindrome;