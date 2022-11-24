import { Shape } from "./Shape";

export class Cuboid extends Shape{
    constructor(private length:number, private width:number, private height:number){
        super();
    }
    area():number{
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    perimeter():number{
        return 4 * (this.length + this.width + this.height);
    }
    volume():number{
        return this.length * this.width * this.height;
    }
}