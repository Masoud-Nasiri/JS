'use strict';

function triangleArea(lengthArray) {
    if (typeof lengthArray === 'object' && lengthArray.length === 3) {
        const a = lengthArray[0];
        const b = lengthArray[1];
        const c = lengthArray[2];
        const s = (a + b + c) / 2;
        return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
    } else {
        return NaN;
    }
}
function squareArea(lengthArray) {
    if (typeof lengthArray === 'object') {
        return 4 * lengthArray[0];
    } else if (typeof lengthArray === 'number') {
        return 4 * lengthArray;
    } else {
        return NaN;
    }
}
function circleArea(lengthArray) {
    if (typeof lengthArray === 'object') {
        return lengthArray[0] * lengthArray[0] * Math.PI;
    } else if (typeof lengthArray === 'number') {
        return lengthArray * lengthArray * Math.PI;
    } else {
        return NaN;
    }
}
const shapeArea = function (shapeName, edgeLength) {
    let area = 0;
    //   console.log(typeof edgeLength);
    //   console.log(edgeLength.length);
    switch (shapeName) {
        case 'Triangle':
            area = triangleArea(edgeLength);
            break;
        case 'Square':
            area = squareArea(edgeLength);
            break;
        case 'Circle':
            area = circleArea(edgeLength);
            break;
        default:
            area = NaN;
    }
    return area;
};

console.log(shapeArea('Triangle', [3, 4, 5]));
console.log(shapeArea('Square', [3]));
console.log(shapeArea('Square', 4));
console.log(shapeArea('Circle', 1));
