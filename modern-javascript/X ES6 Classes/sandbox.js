/////////////// 1- ES6 Classes /////////////

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {

//         }
//     } 
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle(1);

//////////////// 2- Hoisting ////////////////////
// const c = new Circle();

// // Class Declaration 
// class Circle {

// }

// // Class Expression 
// const Square = class {

// };

///////////// 3- Static Methods /////////////////

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     } 

//     // Instance Method
//     draw() {

//     }

//     // Static Method 
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius); 
//     }
// }

// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);

//////////////////////

// class Math2 {
//     static abs(value) {
//         // ...
//     }
// }

// Math2.abs();


//////////////// 4- The This Keyword //////////////////

// 'use strict';

// const Circle = function() {
//     this.draw = function() { console.log(this); }
// };

// const c = new Circle();
// // Method Call
// c.draw();

// const draw = c.draw;

// // Function Call 
// draw();

////////////////

// 'use strict';

// class Circle {
//     draw() {
//         console.log(this);
//     }
// }

// const c = new Circle();
// const draw = c.draw;
// draw();

//////////////// 5- Private Members Using Symbols ///////////////

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius) {
//         this[_radius] = radius;
//     }

//     [_draw](){

//     }
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

///////////// 6- Private Members Using WeakMaps ////////////////

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);

//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }

//     draw() {
//         _move.get(this)();

//         console.log('draw');
//     }
// }

// const c = new Circle(1);

///////////// 7- Getters and Setters ////////////////
// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     get radius() {
//         return _radius.get(this);
//     }

//     set radius(value) {
//         if (value <= 0) throw new Error('Invalid Radius');
//         _radius.set(this, value);
//     }
// }

// const c = new Circle(1);


////////////////// 8- Inheritance /////////////////
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius){
//         super(color);
//         this.radius = radius;
//     }

//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 1);

///////////// 9- Method Overriding ///////////////
// class Shape {
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     move() {
//         super.move();
//         console.log('circle move');
//     }
// }

// const c = new Circle();


///////////////// Exercises / Solution  ////////////////////

const _items = new WeakMap();

class Stack {
    constructor() {
        _item.set(this, []);
    }

push(obj) {
    _items.get(this).push(obj);
}

pop() {
    const items = _items.get(this);

    if (items.length === 0)
        throw new Error('Stack is empty');

    return items.pop();
}

peek(){
    const items = _items.get(this);

    if (items.length === 0) 
        throw new Error('Stack is empty');

    return items[items.length - 1];
}

get count() {
    return _items.get(this).length;
}

}
