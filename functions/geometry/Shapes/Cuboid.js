"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuboid = void 0;
const Shape_1 = require("./Shape");
class Cuboid extends Shape_1.Shape {
    constructor(length, width, height) {
        super();
        this.length = length;
        this.width = width;
        this.height = height;
    }
    area() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    perimeter() {
        return 4 * (this.length + this.width + this.height);
    }
    volume() {
        return this.length * this.width * this.height;
    }
}
exports.Cuboid = Cuboid;
