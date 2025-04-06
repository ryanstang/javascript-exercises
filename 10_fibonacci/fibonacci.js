const fibonacci = function(num) {
    if ( typeof num ==='string') {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    let num1 = 0;
    let num2 = 1;
    let temp;

    for (let i = 1; i < num; i+=1) {
        temp = num2;
        num2 = num2 + num1;
        num1 = temp;
    }

    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
