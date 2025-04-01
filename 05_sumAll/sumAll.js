const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    let small = Math.min(num1, num2);
    let big = Math.max(num1, num2);
    let ans = 0;
    for (let i = small; i < big+1; i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
