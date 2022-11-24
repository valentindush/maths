import { Shape } from "./Shape";

export class Triangle extends Shape{
    constructor(private height: number, private base:number, private sideA?:number, private sideB?:number){
        super()
    }

    area(): number {
        return this.base * this.height / 2
    }

    perimeter(): number {
        if(this.sideA && this.sideB){
            return this.sideA + this.sideB + this.base
        }
        return 0
    }
    volume(): number {
        return 0;
    }
}