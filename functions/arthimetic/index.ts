export const add = (num1: number, num2: number) => num1 + num2;
export const subtract = (num1: number, num2: number) => num1 - num2;
export const multiply = (num1: number, num2: number) => num1 * num2;
export const divide = (num1: number, num2: number) => {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
};

export const multiplyMany = (numbers: number[])=>{
    return numbers.reduce((acc, num)=> acc * num, 1);
}
export const addMany = (numbers: number[])=>{
    return numbers.reduce((acc, num)=> acc + num, 0);
}