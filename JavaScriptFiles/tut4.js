const random = require("random");

let arr = [];

for (let x = 0; x < 10; x++) {
    const randNum = random.int(0, 10);
    arr.push(randNum);
}

arr.forEach((element) => {
    console.log(element);
});

for (let x = 0; x < 100; x++) {
    console.log("Hello world");
}