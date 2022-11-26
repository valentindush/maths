"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearEquation = void 0;
const Equation_1 = require("../Equation");
class LinearEquation extends Equation_1.Equation {
    constructor(equationString) {
        super(equationString);
    }
    getEquationParts() {
        if (!super.getEquationString()) {
            throw new Error("Equation string is empty");
        }
        const str = super.getEquationString();
        const parts = str.split("=");
        if (parts.length !== 2)
            throw new Error("Invalid equation string");
        return parts;
    }
    solve() {
        //TODO: implement this method
        //Algorthim: solve a linear equation
        //1. Get the equation parts
        const parts = this.getEquationParts();
        //2. Get the left and right parts
        const leftPart = parts[0];
        const rightPart = parts[1];
        //3. Get the coefficient and constant
        const leftPartParts = leftPart.split("x");
        const rightPartParts = rightPart.split("x");
        const leftPartCoefficient = leftPartParts[0];
        const leftPartConstant = leftPartParts[1];
        const rightPartCoefficient = rightPartParts[0];
        const rightPartConstant = rightPartParts[1];
        //4. Solve for x
        const x = (parseInt(rightPartConstant) - parseInt(leftPartConstant)) / (parseInt(leftPartCoefficient) - parseInt(rightPartCoefficient));
        //5. Return the solution
        //Example: 2x + 3 = 5x + 1
        return x;
    }
}
exports.LinearEquation = LinearEquation;
