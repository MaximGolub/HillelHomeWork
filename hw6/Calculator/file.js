function Calculator() {

    let lastOperation = null;
    let methodsMap = {
        'sum': 0,
        'subtract': 0,
        'pow': 0,
        'multiply': 0,
        'devide': 0,
    };

    this.updateData = function (methodName, result) {
        lastOperation = { method: methodName, result };
        methodsMap[methodName] += 1;
    };

    this.sum = function (a, b) {
        let result = a + b;
        this.updateData('sum', result);
        return result;
    };

    this.subtract = function (a, b) {
        let result = a - b;
        this.updateData('subtract', result);
        return result;
    };

    this.pow = function (a, b) {
        let result = a ** b;
        this.updateData('pow', result);
        return result;
    };

    this.multiply = function (a, b) {
        let result = a * b;
        this.updateData('multiply', result);
        return result;
    };

    this.divide = function (a, b) {
        let result = a / b;
        this.updateData('divide', result);
        return result;
    };

    this.getMethodCallCount = function (methodName) {
        return methodsMap[methodName];
    };

    this.getLastOperation = function () {
        return lastOperation;
    };
}

const calculator = new Calculator();

console.log('Sum: ' + calculator.sum(10, 5));
console.log('Sum: ' + calculator.sum(20, 5));
console.log('Subtract: ' + calculator.subtract(10, 5));
console.log('Pow: ' + calculator.pow(2, 3));
console.log('Multiply: ' + calculator.multiply(2, 3));
console.log('Divide: ' + calculator.divide(6, 2));
console.log('CallCount Sum: ' + calculator.getMethodCallCount('sum'));
console.log('CalCount Pow: ' + calculator.getMethodCallCount('pow'));
console.log(calculator.getLastOperation());