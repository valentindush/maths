import { Shape } from "./Shape";

export class Square extends Shape{
    constructor(private side:number){
        super();
    }

    area():number{
        return this.side * this.side;
    }
    perimeter():number{
        return this.side * 4;
    }
    volume(): number {
        return 0;
    }
}