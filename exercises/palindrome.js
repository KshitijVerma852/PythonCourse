const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question(">> ", (inputStr) => {
    const reverseInputStr = (inputStr) => {
        let ans = "";
        for (let x = inputStr.length - 1; x > -1; x--) {
            ans += inputStr[x];
        }
        return ans;
    };
    if (inputStr.toLowerCase() === reverseInputStr(inputStr).toLowerCase()) {
        console.log("Palindrome");
        r1.close();
    } else {
        console.log("Not Palindrome");
        r1.close();
    }
});

r1.on("close", () => {
    process.exit(0);
});
