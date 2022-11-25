export abstract class Equation{
    
    constructor(private equationString: string){
        this.equationString = equationString;
    }

    public getEquationString(): string{
        return this.equationString;
    }
    public setEquationString(equationString: string): void{
        this.equationString = equationString;
    }


    abstract getEquationParts(): string[];
    abstract solve(): number;    

}