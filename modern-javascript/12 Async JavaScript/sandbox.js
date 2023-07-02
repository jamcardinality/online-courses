//Async JavaScript//
// -Governs how we perform tasl whick take some time to complete (e.g Getting data from a database)
// "Start something now and finish it later"

// Single Threaded
 
///////////////////002 Async Code in Action ////////////////////
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);

/////////////////// 003 What are HTTP Requests_ ////////////////////
// - Make HTTP request to get data from another server.
// - We make these requests to API endpoints.

//////////// 004 Making HTTP Requests (XHR) ///////////////
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request, request.readyState);
//   if(request.readyState === 4){
//     // console.log(request);
//     console.log(request.responseText);
//   } 
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();


///////////////////// 005 Response Status/////////////////////////
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request);
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request.responseText);
//   } else if (request.readyState === 4){
//     console.log('could not fetch the data');
//   }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

///////////////////// 006 Callback Functions//////////////////
// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();
  
//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         callback(undefined, request.responseText);
//       } else if (request.readyState === 4){
//         callback('could not fetch the data', undefined);
//       }
  
//     });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
  
//   };
  
//   console.log(1);
//   console.log(2);
  
//   getTodos((err, data) => {
//     console.log('callback function fired');
//     if(err){
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
  
//   console.log(3);
//   console.log(4);

///////////////////// 007 JSON Data ////////////////////
// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();
  
//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data);
//       } else if (request.readyState === 4){
//         callback('could not fetch the data', undefined);
//       }
  
//     });
    
//     request.open('GET', 'todos.json');
//     request.send();
  
//   };
  
//   getTodos((err, data) => {
//     console.log('callback function fired');
//     if(err){
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });

/////////// 008 Callback Hell ///////////////////////
// const getTodos = (resource, callback) => {

//     const request = new XMLHttpRequest();
  
//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data);
//       } else if (request.readyState === 4){
//         callback('could not fetch the data', undefined);
//       }
  
//     });
    
//     request.open('GET', resource);
//     request.send();
  
//   };
  
//   getTodos('json/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('json/mario.json', (err, data) => {
//       console.log(data);
//       getTodos('json/shaun.json', (err, data) => {
//         console.log(data);
//       });
//     });
//   });


// ///////////////// 009 Promise Basics///////////////////////
// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4){
//         reject('could not fetch the data');
//       }
  
//     });
    
//     request.open('GET', resource);
//     request.send();
//   });

// };

// getTodos('json/luigi.json').then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

// // promise example
// const getSomething = () => {

//   return new Promise((resolve, reject) => {
//     // do something (fetch data)
//     // resolve('some data');
//     reject('some error');
//   });

// };

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

///////////////// 010 Chaining Promises //////////////////
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener('readystatechange', () => {
    
        if(request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4){
          reject('could not fetch the data');
        }
    
      });
      
      request.open('GET', resource);
      request.send();
    });
  
  };
  
  getTodos('json/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('json/mario.json');
  }).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('json/shaun.json');
  }).then(data => {
    console.log('promise 3 resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });

///////////////  011 The Fetch API ////////////////
// fetch API

// fetch('json/luigi.json').then(response => {
//     //console.log(response);
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log(err);
//   });

//////////////// 012 Async & Await //////////////////
// async & await

// const getTodos = async () => {

//     let response = await fetch('json/luigi.json');
//     let data = await response.json();
//     return data;
  
//   };
  
//   console.log(1);
//   console.log(2);
  
//   getTodos()
//     .then(data => console.log('resolved:', data));
  
//   console.log(3);
//   console.log(4);
  
  // console.log(getTodos());

/////////////////// 013 Throwing & Catching Errors ////////////////
// async & await

// const getTodos = async () => {

//     let response = await fetch('json/luigi.json');
  
//     if(response.status !== 200){
//       throw new Error('cannot fetch the data');
//     }
  
//     let data = await response.json();
//     return data;
  
//   };
  
//   getTodos()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected:', err.message));
