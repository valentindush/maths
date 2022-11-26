"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
class Triangle extends Shape_1.Shape {
    constructor(height, base, sideA, sideB) {
        super();
        this.height = height;
        this.base = base;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    area() {
        return this.base * this.height / 2;
    }
    perimeter() {
        if (this.sideA && this.sideB) {
            return this.sideA + this.sideB + this.base;
        }
        return 0;
    }
    volume() {
        return 0;
    }
}
exports.Triangle = Triangle;
