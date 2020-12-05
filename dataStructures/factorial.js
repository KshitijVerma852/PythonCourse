const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question(">> ", (n) => {
    // Iterative
    const factorialIterative = (n) => {
        let ans = 1;
        for (let x = 1; x <= n; x++) {
            ans *= x;
        }
        return ans;
    };
    // Recursive
    const factorialRecursive = (n) => {
        if (n === 0) {
            return 1;
        }
        return n * factorialRecursive(n - 1);
    };
    console.log(`Iterative: ${factorialIterative(n)}`);
    console.log(`Recursive: ${factorialRecursive(n)}`);
    r1.close();
});

r1.on("close", () => {
    process.exit(0);
});
