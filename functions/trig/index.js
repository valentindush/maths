"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotanSub = exports.cotanSum = exports.tanSub = exports.tanSum = exports.cosinSub = exports.sinSub = exports.cosinSum = exports.sinSum = exports.csc = exports.sec = exports.cotan = exports.tan = exports.cosin = exports.sin = exports.degrees = exports.radians = void 0;
const radians = (angleInDegrees) => {
    return angleInDegrees * (Math.PI / 180);
};
exports.radians = radians;
const degrees = (angleInRadians) => {
    return angleInRadians * (180 / Math.PI);
};
exports.degrees = degrees;
const sin = (angle, reverse) => {
    if (typeof reverse !== 'undefined') {
        return (0, exports.degrees)(Math.asin((0, exports.radians)(angle)));
    }
    return Math.sin((0, exports.radians)(angle));
};
exports.sin = sin;
const cosin = (angle, reverse) => {
    if (typeof reverse !== 'undefined') {
        return (0, exports.degrees)(Math.acos((0, exports.radians)(angle)));
    }
    return Math.cos((0, exports.radians)(angle));
};
exports.cosin = cosin;
//tan
const tan = (angle, reverse) => {
    if (typeof reverse !== 'undefined') {
        return (0, exports.degrees)(Math.atan((0, exports.radians)(angle)));
    }
    return Math.tan((0, exports.radians)(angle));
};
exports.tan = tan;
//cotan
const cotan = (angle, reverse) => {
    return 1 / Math.tan((0, exports.radians)(angle));
};
exports.cotan = cotan;
//sec
const sec = (angle) => {
    return 1 / Math.cos((0, exports.radians)(angle));
};
exports.sec = sec;
const csc = (angle) => {
    return 1 / Math.sin((0, exports.radians)(angle));
};
exports.csc = csc;
//advanced trigonometry
//sin(a+b) = sin(a)cos(b) + cos(a)sin(b)
const sinSum = (a, b) => {
    return (0, exports.sin)(a) * (0, exports.cosin)(b) + (0, exports.cosin)(a) * (0, exports.sin)(b);
};
exports.sinSum = sinSum;
//cos(a+b) = cos(a)cos(b) - sin(a)sin(b)
const cosinSum = (a, b) => {
    return (0, exports.cosin)(a) * (0, exports.cosin)(b) - (0, exports.sin)(a) * (0, exports.sin)(b);
};
exports.cosinSum = cosinSum;
//sin(a-b) = sin(a)cos(b) - cos(a)sin(b)
const sinSub = (a, b) => {
    return (0, exports.sin)(a) * (0, exports.cosin)(b) - (0, exports.cosin)(a) * (0, exports.sin)(b);
};
exports.sinSub = sinSub;
//cons(a-b) = sin(a)sin(b) + cos(a)cos(b)
const cosinSub = (a, b) => {
    return (0, exports.sin)(a) * (0, exports.sin)(b) + (0, exports.cosin)(a) * (0, exports.cosin)(b);
};
exports.cosinSub = cosinSub;
//tan(a+b) = (tan(a) + tan(b)) / (1 - tan(a)tan(b))
const tanSum = (a, b) => {
    return ((0, exports.tan)(a) + (0, exports.tan)(b)) / (1 - (0, exports.tan)(a) * (0, exports.tan)(b));
};
exports.tanSum = tanSum;
//tan(a-b) = (tan(a) - tan(b)) / (1 + tan(a)tan(b))
const tanSub = (a, b) => {
    return ((0, exports.tan)(a) - (0, exports.tan)(b)) / (1 + (0, exports.tan)(a) * (0, exports.tan)(b));
};
exports.tanSub = tanSub;
//cotan(a+b) = (cotan(a) + cotan(b)) / (1 - cotan(a)cotan(b))
const cotanSum = (a, b) => {
    return ((0, exports.cotan)(a) + (0, exports.cotan)(b)) / (1 - (0, exports.cotan)(a) * (0, exports.cotan)(b));
};
exports.cotanSum = cotanSum;
//cotan(a-b) = (cotan(a) - cotan(b)) / (1 + cotan(a)cotan(b))
const cotanSub = (a, b) => {
    return ((0, exports.cotan)(a) - (0, exports.cotan)(b)) / (1 + (0, exports.cotan)(a) * (0, exports.cotan)(b));
};
exports.cotanSub = cotanSub;
