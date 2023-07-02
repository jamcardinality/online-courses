///////////////////// object literals ///////////////////////

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co.uk",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
// };

// console.log(user);
// console.log(user.age);

// user.age = 35;
// console.log(user.age);

// console.log(user["name"]);
// user["name"] = "chun-li";
// console.log(user["name"]);

// console.log(typeof user);

/////////////////// Adding Methods ////////////////////////

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co.uk",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//   login: function () {
//     console.log("the user logged in");
//   },
//   logout: function () {
//     console.log("the user logged out");
//   },
//   logBlogs: function () {
//     // access the blogs here
//   },
// };

// user.login();
// user.logout();

// const name = "shaun";
// name.toUpperCase();

///////////////////  'this' Keyword ///////////////////////

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co.uk",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//   login: function() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
//   logBlogs() {
//     // access the blogs here
//     // console.log(this);
//     console.log("this user has written these blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// console.log(this);
// user.logBlogs();

////////////// Objects in Arrays //////////////////////

// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);
// console.log(blogs[0].likes);

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co.uk",
//   location: "berlin",
//   blogs: [
//     { title: "why mac & cheese rules", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 },
//   ],
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
//   logBlogs() {
//     // access the blogs here
//     // console.log(this);
//     console.log("this user has written these blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(`${blog.title} has ${blog.likes} likes`);
//     });
//   }
// };

// console.log(this);
// user.logBlogs();

//////////////////////// Math object ///////////////////////////

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

///////////////Primitive vs Reference ///////////////////

////////////////// primitive values /////////////////

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

/////////////// reference values //////////////////

// userOne = { name: 'ryu', age: 30 };
// userTwo = userOne;
// console.log(userOne, userTwo);

// userOne.name = 'chun-li';
// console.log(userOne, userTwo);
