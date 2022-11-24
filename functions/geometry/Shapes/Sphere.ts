import { Shape } from "./Shape";
export class Sphere extends Shape{
    constructor(private radius: number){
        super()
    }
    area(): number {
        return 4 * Math.PI * this.radius * this.radius;
    }
    volume(): number {
        return 4 * Math.PI * this.radius * this.radius * this.radius / 3;
    }
    perimeter(): number {
        return 0
    }
}