const fibonacci = function(num) {
    let count;
    if (typeof num !== 'number') {
        count = parseInt(num);
    } else {
        count = num;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let num1 = 1;
    let num2 = 0;

    for (let i = 2; i <= count; i++) {
        let current = num1 + num2;
        num2= num1;
        num1 = current;
    }

    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
