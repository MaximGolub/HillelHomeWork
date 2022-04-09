"use strict";

const shape = {
    width: 5,
    height: 5,

    setParameters(value) {
        if (!Array.isArray(value)) {
            throw new Error("Value should be array");
        }
        if (value.length === 2) {
            const [width, height] = value;
            this.width = width;
            this.height = height;
        } else throw new Error("Array should be contain two values");
    },
};

function Square() {
    Object.defineProperty(this, "square", {
        get: function() {
            return this.squareFigure = Math.pow(this.width, 2);
        },
        set: function(value) {
            this.setParameters(value);
        }
    });
}

function Rectangle() {
    Object.defineProperty(this, "square", {
        get: function() {
            return this.squareFigure = this.width * this.height;
        },
        set: function(value) {
            this.setParameters(value);
        }
    });
}

function Circle() {
    Object.defineProperty(this, "square", {
        get: function() {
            return this.squareFigure = Math.round(Math.PI * Math.pow(this.width, 2));
        },
        set: function(value) {
            this.setParameters(value);
        }
    });
}

Square.prototype = shape;
Rectangle.prototype = shape;
Circle.prototype = shape;

const squareObj = new Square();
const rectangleObj = new Rectangle();
const circleObj = new Circle();

squareObj.square = [10, 10];
rectangleObj.square = [10, 10];
circleObj.square = [10, 10];

console.log('Square Square - ' + squareObj.square);
console.log('Square Rectangle - ' + rectangleObj.square);
console.log('Square Circle - ' + circleObj.square);