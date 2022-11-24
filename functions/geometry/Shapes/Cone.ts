import { Shape } from "./Shape";
export class Cone extends Shape{
    constructor(private height:number, private radius:number){
        super()
    }
    area(): number {
        return Math.PI * this.radius * (this.radius + Math.sqrt(this.height * this.height + this.radius * this.radius));
    }
    volume(): number {
        return Math.PI * this.radius * this.radius * this.height / 3;
    }
    perimeter(): number {
        return 0;
    }
}