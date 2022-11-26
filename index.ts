import { Equation } from './functions/equations/Equation'
import { LinearEquation } from './functions/equations/linear/LinearEq'
import { Cube } from './functions/geometry/Shapes/Cube'
import { Shape } from './functions/geometry/Shapes/Shape'
import { Triangle } from './functions/geometry/Shapes/Triangle'

export * from './functions/arthimetic'
const eq1 = new LinearEquation('2x+3=5x+1')
console.log("value of x: " + eq1.solve())
