const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question(">> ", (n) => {
    for (let x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("Fizz buzz");
        }
        else if (x % 3 === 0) {
            console.log("Fizz");
        }
        else if (x % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(x);
        }
    }
    r1.close();
});

r1.on("close", () => {
    process.exit();
});
