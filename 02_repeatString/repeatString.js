const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }

    let ans = '';

    for (let i=0; i < num; i++){
        ans += word;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
