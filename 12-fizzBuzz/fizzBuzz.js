function fizzBuzz(start, end) {
  // Insert code here;
    let arr = [];
    for (let i = 0; i < end + 1 - start; i++) {
        if ((i + start) % 3 == 0 && (i + start) % 15 != 0) arr[i] = "Fizz";
        else if ((i + start) % 5 == 0  && (i + start) % 15 != 0) arr[i] = "Buzz";
        else if ((i + start) % 15 == 0) arr[i] = "FizzBuzz";
        else arr[i] = i + start;
    }
    return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;