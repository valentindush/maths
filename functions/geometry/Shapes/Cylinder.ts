import { Shape } from "./Shape";

export class Cylinder extends Shape {
    constructor(private height: number, private radius: number) {
        super();
    }

    area(): number {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
    perimeter(): number {
        return 0;
    }
    volume(): number {
        return Math.PI * this.radius * this.radius * this.height;
    }
}