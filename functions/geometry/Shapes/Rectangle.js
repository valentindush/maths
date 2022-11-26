"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    area() {
        return this.width * this.length;
    }
    perimeter() {
        return (this.width + this.length) * 2;
    }
    volume() {
        return 0;
    }
}
exports.Rectangle = Rectangle;
