"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const Shape_1 = require("./Shape");
class Cylinder extends Shape_1.Shape {
    constructor(height, radius) {
        super();
        this.height = height;
        this.radius = radius;
    }
    area() {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
    perimeter() {
        return 0;
    }
    volume() {
        return Math.PI * this.radius * this.radius * this.height;
    }
}
exports.Cylinder = Cylinder;
