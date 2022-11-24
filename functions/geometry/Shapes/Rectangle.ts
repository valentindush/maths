import { Shape } from "./Shape";

export class Rectangle extends Shape{
    constructor(private width: number, private length:number){
        super()
    }

    area(): number {
        return this.width * this.length
    }
    perimeter(): number {
        return (this.width + this.length) * 2
    }
    volume(): number {
        return 0;
    }
}