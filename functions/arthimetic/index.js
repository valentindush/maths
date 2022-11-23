"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMany = exports.multiplyMany = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
const add = (num1, num2) => num1 + num2;
exports.add = add;
const subtract = (num1, num2) => num1 - num2;
exports.subtract = subtract;
const multiply = (num1, num2) => num1 * num2;
exports.multiply = multiply;
const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
};
exports.divide = divide;
const multiplyMany = (numbers) => {
    return numbers.reduce((acc, num) => acc * num, 1);
};
exports.multiplyMany = multiplyMany;
const addMany = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};
exports.addMany = addMany;
