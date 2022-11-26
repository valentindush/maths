"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
const Shape_1 = require("./Shape");
class Sphere extends Shape_1.Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 4 * Math.PI * this.radius * this.radius;
    }
    volume() {
        return 4 * Math.PI * this.radius * this.radius * this.radius / 3;
    }
    perimeter() {
        return 0;
    }
}
exports.Sphere = Sphere;
