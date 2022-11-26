"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cone = void 0;
const Shape_1 = require("./Shape");
class Cone extends Shape_1.Shape {
    constructor(height, radius) {
        super();
        this.height = height;
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * (this.radius + Math.sqrt(this.height * this.height + this.radius * this.radius));
    }
    volume() {
        return Math.PI * this.radius * this.radius * this.height / 3;
    }
    perimeter() {
        return 0;
    }
}
exports.Cone = Cone;
