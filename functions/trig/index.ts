export const radians = (angleInDegrees:number) => {
    return angleInDegrees * (Math.PI / 180)
}
export const degrees = (angleInRadians:number) => {
    return angleInRadians * (180 / Math.PI)
}
export const sin = (angle:number, reverse?:-1) =>{
    if(typeof reverse !== 'undefined'){
        return degrees(Math.asin(radians(angle)))
    }
    return Math.sin(radians(angle))
}
export const cosin = (angle:number, reverse?:-1) =>{
    if(typeof reverse !== 'undefined'){
        return degrees(Math.acos(radians(angle)))
    }
    return Math.cos(radians(angle))
}

//tan
export const tan = (angle:number, reverse?:-1) =>{
    if(typeof reverse !== 'undefined'){
        return degrees(Math.atan(radians(angle)))
    }
    return Math.tan(radians(angle))
}

//cotan
export const cotan = (angle:number, reverse?:-1) =>{
    return 1 / Math.tan(radians(angle))
}

//sec
export const sec = (angle:number) => {
    return 1 / Math.cos(radians(angle))
}

export const csc = (angle:number) => {
    return 1/ Math.sin(radians(angle))
}

//advanced trigonometry

//sin(a+b) = sin(a)cos(b) + cos(a)sin(b)
export const sinSum = (a:number, b:number) => {
    return sin(a) * cosin(b) + cosin(a) * sin(b)
}

//cos(a+b) = cos(a)cos(b) - sin(a)sin(b)
export const cosinSum = (a:number, b:number) => {
    return cosin(a) * cosin(b) - sin(a) * sin(b)
}

//sin(a-b) = sin(a)cos(b) - cos(a)sin(b)
export const sinSub = (a:number, b:number) => {
    return sin(a) * cosin(b) - cosin(a) * sin(b)
}

//cons(a-b) = sin(a)sin(b) + cos(a)cos(b)
export const cosinSub = (a:number, b:number) => {
    return sin(a) * sin(b) + cosin(a) * cosin(b)
}

//tan(a+b) = (tan(a) + tan(b)) / (1 - tan(a)tan(b))
export const tanSum = (a:number, b:number) => {
    return (tan(a) + tan(b)) / (1 - tan(a) * tan(b))
}

//tan(a-b) = (tan(a) - tan(b)) / (1 + tan(a)tan(b))
export const tanSub = (a:number, b:number) => {
    return (tan(a) - tan(b)) / (1 + tan(a) * tan(b))
}

//cotan(a+b) = (cotan(a) + cotan(b)) / (1 - cotan(a)cotan(b))
export const cotanSum = (a:number, b:number) => {
    return (cotan(a) + cotan(b)) / (1 - cotan(a) * cotan(b))
}

//cotan(a-b) = (cotan(a) - cotan(b)) / (1 + cotan(a)cotan(b))
export const cotanSub = (a:number, b:number) => {
    return (cotan(a) - cotan(b)) / (1 + cotan(a) * cotan(b))
}