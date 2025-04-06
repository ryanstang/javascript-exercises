const palindromes = function (str) {
    let i1 = 0
    let i2 = str.length - 1;

    while (i2 >= i1) {
        while (!/[a-zA-Z0-9]/.test(str[i1])) {
            i1 +=1;
        }

        while (!/[a-zA-Z0-9]/.test(str[i2])) {
            i2 -=1;
        }

        let letter1 = str[i1];
        let letter2 = str[i2];

        if (/[A-Z]/.test(letter1)){
            letter1 = letter1.toLowerCase();
        }

        if (/[A-Z]/.test(letter2)){
            letter2 = letter2.toLowerCase();
        }

        if (letter1 != letter2) {
            return false;
        }

        i1 += 1;
        i2 -= 1;

    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
