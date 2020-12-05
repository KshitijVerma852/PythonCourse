const makeArray = () => {
    ans = [];
    for (let y = 1; y <= 100; y++) {
        ans.push(y);
    }
    return ans;
};

function shuffle(arra1) {
    let ctr = arra1.length,
        temp,
        index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

let ans2 = makeArray();
console.log(shuffle(ans2));

const findMissingNumbers = (array) => {
    const expectedSum = (array.length * (array.length + 1)) / 2;
    let actualSum = 0;
    for (let x = 0; x < array.length; x++) {
        actualSum += array[x];
    }
    if (actualSum === expectedSum) {
        return true;
    } else {
        return false;
    }
};

let array = makeArray();
console.log(findMissingNumbers(array));
