import { Shape } from "./Shape";

export class Circle extends Shape{
    constructor(private radius:number){
        super();
    }
    area():number{
        return Math.PI * this.radius * this.radius;
    }
    perimeter():number{
        return 2 * Math.PI * this.radius;
    }
    volume():number{
        return 0;
    }
}