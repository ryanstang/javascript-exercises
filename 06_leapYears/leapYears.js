const leapYears = function(num) {
    if (num%4!=0 || (num%100===0 && num%400!=0)) {
        return false;
    } else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
