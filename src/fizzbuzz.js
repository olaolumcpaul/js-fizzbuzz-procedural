const answer = []

// write a program that populates the answer array with numbers from 1 to 15, except:
// 1. When the number is a multiple of three (e.g. 3, 6, 9, etc.), the number should be 
// replaced with the word Fizz

// 2. When the number is a multiple of five (e.g. 5, 10, etc.), the number should be 
// replaced with the word Buzz

// 3. When the number is a multiple of both three and five (e.g. 15), the number should 
// be replaced with the word FizzBuzz

// Write your code below this line

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(answer.push("FizzBuzz"));
    } else if (i % 3 === 0) {
        console.log(answer.push("Fizz"));
    } else if (i % 5 === 0) {
        console.log(answer.push("Buzz"));
    } else {
        console.log(answer.push(i));
    }
}
// Don't touch the code below this line, we'll cover it later
module.exports = answer
