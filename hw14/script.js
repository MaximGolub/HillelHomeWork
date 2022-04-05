"use strict";

const shape = {
    width: 5,
    height: 5,

    get squareSquare() {
        if (this.width === this.height) {
            this.squareFigure = Math.pow(this.width, 2);
            return `Square ${this.figureName} - ${this.squareFigure}`;
        } else console.log('Sides square are not equal');
    },

    get squareRectangle() {
        this.squareFigure = this.width * this.height;
        return `Square ${this.figureName} - ${this.squareFigure}`;
    },

    get squareCircle() {
        this.squareFigure = Math.round(Math.PI * Math.pow(this.width, 2));
        return `Square ${this.figureName} - ${this.squareFigure}`;
    },

    set square(value) {
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
    this.figureName = Square.name;
}

function Rectangle() {
    this.figureName = Rectangle.name;
}

function Circle() {
    this.figureName = Circle.name;
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

console.log(squareObj.squareSquare, rectangleObj.squareRectangle, circleObj.squareCircle);