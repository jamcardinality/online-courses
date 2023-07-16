/////////////// 002 Object Literal Recap ///////////////

// const userOne = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login(){
//       console.log('the user logged in');
//     },
//     logout(){
//       console.log('the user logged out');
//     }
//   };
  
//   console.log(userOne.email, userOne.username);
//   userOne.login();
  
//   const userTwo = {
//     username: 'chun-li',
//     email: 'chun.li@thenetninja.co.uk',
//     login(){
//       console.log('the user logged in');
//     },
//     logout(){
//       console.log('the user logged out');
//     }
//   };
  
  // const userThree = new User('shaun', 'shaun@thenetninja.co.uk');

  //////////////003 Classes ///////////////////
// - A Class is like a blueprint for an object (it describes how one should be made)

// class User {
  
// }

//////////////// 004 Class Constructors ///////////
// class User {
//     constructor(username, email){
//       // this.username = 'mario';
//       this.username = username;
//       this.email = email;
//     }
//   }
  
//   const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
//   const userTwo = new User('mario', 'mario@thenetninja.co.uk');
  
//   console.log(userOne, userTwo);
  
  // the 'new' keyword
  // 1 - it creates a new empty object {}
  // 2 - it binds the value of 'this' to the new empty object
  // 3 - it calls the constructor function to 'build' the object

  ////////// 005 Class Methods & Method Chaining /////////
  // class User {
  //   constructor(username, email){
  //     this.username = username;
  //     this.email = email;
  //     this.score = 0;
  //   }
  //   login(){
  //     console.log(`${this.username} just logged in`);
  //     return this;
  //   }
  //   logout(){
  //     console.log(`${this.username} just logged out`);
  //     return this;
  //   }
  //   incScore(){
  //     this.score += 1;
  //     console.log(`${this.username} has a score of ${this.score}`);
  //     return this;
  //   }
  // }
  
  // const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
  // const userTwo = new User('mario', 'mario@thenetninja.co.uk');
  
  // // userOne.login();
  // // userOne.logout();
  // // userTwo.login();
  // // userTwo.logout();
  
  // userTwo.login()
  //   .incScore()
  //   .incScore()
  //   .logout();

////////// 006 Class Inheritance (subclasses) //////////////////
// class User {
//   constructor(username, email){
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login(){
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout(){
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore(){
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user){
//     users = users.filter(u => u.username !== user.username);
//     return this; // allow method chaining
//   }
// }
// s
// const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
// const userTwo = new User('mario', 'mario@thenetninja.co.uk');
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

// console.log(userOne, userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

/////////////////// 007 Super( )/////////////////////////////
// class User {
//   constructor(username, email){
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login(){
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout(){
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore(){
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title){
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user){
//     users = users.filter(u => u.username !== user.username);
//     return this; // allow method chaining
//   }
// }

// const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
// const userTwo = new User('mario', 'mario@thenetninja.co.uk');
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt ninja');

// console.log(userOne, userThree);

/////////// 008 Constructors (under the hood) //////////////////////
// // constructor functions
// // class User {
// //   constructor(username){
// //     this.username = username;
// //   }
// // }

// function User(username, email){
//   this.username = username;
//   this.email = email;
//   this.login = function(){
//     console.log(`${this.username} has logged in`);
//   };
// }

// const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
// const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');

// console.log(userOne, userTwo);
// userOne.login();

// // the 'new' keyword
// // 1 - it creates a new empty object {}
// // 2 - it binds the value of 'this' to the new empty object
// // 3 - it calls the constructor function to 'build' the object

//////////////// 009 Prototype Model //////////////
// // Prototypes
// // - Every object in JavaScript as a prototype
// // - Prototypes contain all the methods for that object type

// function User(username, email){
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function(){
//   console.log(`${this.username} has logged in`);
//   return this;
// };

// User.prototype.logout = function(){
//   console.log(`${this.username} has logged out`);
//   return this;
// };

// const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
// const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');

// console.log(userOne);

// userOne.login().logout();

//////////////// 010 Prototypal Inheritance /////////////////
// function User(username, email){
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function(){
//   console.log(`${this.username} has logged in`);
//   return this;
// };

// User.prototype.logout = function(){
//   console.log(`${this.username} has logged out`);
//   return this;
// };

// // admin
// function Admin(username, email){
//   User.call(this, username, email);
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function(user){
//   // delete the user
// };

// const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
// const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

// console.log(userThree);

//////////////////// 011 Built-in Objects /////////////////////

