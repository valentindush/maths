"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
const Shape_1 = require("./Shape");
class Cube extends Shape_1.Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return 6 * this.side * this.side;
    }
    perimeter() {
        return 12 * this.side;
    }
    volume() {
        return this.side * this.side * this.side;
    }
}
exports.Cube = Cube;
