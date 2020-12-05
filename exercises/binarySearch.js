const random = require("random");
const readline = require("readline");

let randNums = [];
for (let x = 0; x < 10; x++) {
    const randNum = random.int(0, 10);
    randNums.push(randNum);
}

let selectionSort = (randNums) => {
    for (let x = 0; x < randNums.length; x++) {
        let low = randNums[x];
        let shouldSwap = false;
        for (let y = x; y < randNums.length; y++) {
            let numAtY = randNums[y];
            if (low > numAtY) {
                low = numAtY;
                var index = y;
                shouldSwap = true;
            }
        }
        if (shouldSwap) {
            let temp = randNums[x];
            randNums[x] = low;
            randNums[index] = temp;
        }
    }
    return randNums;
};

let binarySearch = (sortedArray, num) => {
    console.log(sortedArray);
    let low = 0;
    let high = sortedArray.length - 1;
    while (low < high) {
        let mid = parseInt(Math.ceil((high + low) / 2));
        if (
            sortedArray[low] === num ||
            sortedArray[mid] === num ||
            sortedArray[high] === num
        ) {
            return true;
        } else {
            if (sortedArray[mid] > num) {
                high = mid;
                low++;
            } else if (sortedArray[mid] < num) {
                low = mid;
                high--;
            }
        }
    }
};

// Getting user input

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sortedArray = selectionSort(randNums);

r1.question(">> ", (num) => {
    if (binarySearch(sortedArray, num)) {
        console.log("Found");
        r1.close();
    } else {
        console.log("Not found");
        r1.close();
    }
});

r1.on("close", () => {
    process.exit(0);
});

// Making array of random numbers

// Sorting the numbers

// Searching the sorted array
