"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
class Square extends Shape_1.Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return this.side * 4;
    }
    volume() {
        return 0;
    }
}
exports.Square = Square;
