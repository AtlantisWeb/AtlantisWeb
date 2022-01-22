function calc(identifier, a, b) {

    let result = 0;

    function checkType(a, b) {
        if (typeof a !== 'number' || isNaN(a)) {
            return result = 'Error';
        } else if (typeof b !== 'number' || isNaN(b)) {
            return result = 'Error';
        }
    }

    checkType(a, b);
    if (result === 'Error') {
        return 'Error';
    }

    switch (identifier) {
        case 'sum':
            return result = a + b;
            break;
        case 'multi':
            return result = a * b;
            break;
        case 'divide':
            return result = a / b;
            break;
        case 'percent':
            return result = a % b;
            break;
        case 'pow':
            return result = a ** b;
            break;
        case 'extract':
            return result = a - b;
            break;
        default:
            return "unknown operation";

    }
}

console.log(calc('sum', 2, 34));
console.log(calc(`multi`, 1, 2));
console.log(calc(`divide`, 34, ''));
console.log(calc(`extract`, 34, 3));
console.log(calc(`percent`, 34, 2));
console.log(calc('pow', 3, 0));

