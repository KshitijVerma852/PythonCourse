const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question(">> ", (num1) => {
    r1.question(">> ", (operation) => {
        r1.question(">> ", (num2) => {
            if (operation === "+") {
                console.log(
                    `The answer of ${num1} ${operation} ${num2} is: ${
                        parseInt(num1) + parseInt(num2)
                    }`
                );
                r1.close();
            } else if (operation === "-") {
                console.log(
                    `The answer of ${num1} ${operation} ${num2} is: ${
                        parseInt(num1) - parseInt(num2)
                    }`
                );
                r1.close();
            } else if (operation === "*") {
                console.log(
                    `The answer of ${num1} ${operation} ${num2} is: ${
                        parseInt(num1) * parseInt(num2)
                    }`
                );
                r1.close();
            } else if (operation === "/") {
                console.log(
                    `The answer of ${num1} ${operation} ${num2} is: ${
                        parseInt(num1) / parseInt(num2)
                    }`
                );
                r1.close();
            }
        });
    });
});

r1.on("close", () => {
    process.exit(0);
});
