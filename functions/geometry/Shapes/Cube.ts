import { Shape } from "./Shape";

export class Cube extends Shape{
    constructor(private side:number){
        super()
    }
    area(): number {
        return 6 * this.side * this.side
    }
    perimeter(): number {
        return 12 * this.side
    }
    volume(): number {
        return this.side * this.side * this.side
    }
}