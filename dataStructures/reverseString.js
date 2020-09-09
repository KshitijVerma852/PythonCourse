function reverseStr(str) {
    let ans = [];
    for (let x = str.length - 1; x >= 0; x--) {
        ans.push(str[x]);
    }
    return ans;
}

const reversedStr = reverseStr("Hello");
console.log(reversedStr.join());