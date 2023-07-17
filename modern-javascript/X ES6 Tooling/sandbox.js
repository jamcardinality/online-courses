///////////// 1- Modules /////////////////////
// Modularity
// - Maintainability
// - Reuse
// - Abstract 

////////////// 2- CommonJS Modules //////////////////
// const Circle = require('./circle');
// const c = new Circle(10);
// c.draw();

// ///// circle.js ///// 
// // Implementation Detail
// const _radius = new WeakMap();

// // Public Interface 
// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     draw() {
//         console.log('Circle with radius ' + _radius.get(this));
//     }
// }

// module.exports = Circle;

//////////////// 3- ES6 Modules /////////////////////
// import {Circle} from './circle.js';
// const c = new Circle(10);
// c.draw();

/////////////// 4- ES6 Tooling ////////////////////////
// Transpiler
// Translator + Compiler
// Babel

// Bundler 
// Combining all javascript files into a single file, which we call a bundle.  
// Webpack


//////////////// 5- Babel ////////////////////
// installing babel


//////////////////// 6- Webpack ///////////////////////////
// Installing Webpack Module

// import {Circle} from './circle.js';
// const c = new Circle(10);
// c.draw();




