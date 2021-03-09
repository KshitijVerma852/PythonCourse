// Array of Strings Without Special Characters

// You are given a string representing a sentence as an argument. Return an array with each word from the string as separate string element, removing any special characters, punctuation or spaces.

// Requirements

// Must return an array of strings
// The original upper or lower casing should be maintained

// Example #1

// solve("Hi, how are you; I was quite curious!")
// > ["Hi", "how", "are", "you", "I", "was", "quite", "curious"]

// Example #2

// solve("Hello!!! The- sun- is- shining?")
// > ["Hello", "The", "sun", "is", "shining"]

const solve = (strArg) => {
    strArg = strArg.split("");
    const ans = [];
    let temp = "";
    strArg.forEach((str) => {
        if (
            str !== "!" &&
            str !== "-" &&
            str !== "?" &&
            str !== ";" &&
            str !== "," &&
            str !== "."
        ) {
            if (str !== " ") {
                temp += str;
            } else {
                temp !== "" ? ans.push(temp) : {};
                temp = "";
            }
        }
    });
    ans.push(temp);
    return ans;
};

solve("Hello!!! The- sun- is- shining?");
