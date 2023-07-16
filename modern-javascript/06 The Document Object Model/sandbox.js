////////////// 003 The Query Selector ///////////////

// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const error = document.querySelectorAll('.error');
// console.log(error);

// // paras.forEach(para => {
// //     console.log(para);
// // })
// // console.log(paras[2]);

//////// 004 Other Ways to Query the DOM /////////////

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title); 

// // get element by their class name 
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name 
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


//////////005 Adding & Changing Page Content //////////

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = "ninja are awesome!";
// para.innerText += "ninja are awesome!";

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText +=  ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// console.log(people);

//////////// 006 Getting & Setting Attributes //////////////////
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com');
// link.innerText = 'Welcome to facebook';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');

///////////////// 007 Changing CSS Styles////////////////
// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

//////////008 Adding & Removing Classes///////////////
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   if(p.textContent.includes('error')){
//     p.classList.add('error');
//   } else if(p.textContent.includes('success')) {
//     p.classList.add('success');
//   }
// });

////////////009 Parents, Children & Siblings//////////
// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining
// console.log(title.nextElementSibling.parentElement.children);

/////////////////////010 Event Basics (click events)/////////////////// 
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     e.target.style.textDecoration = 'line-through';
//   });
// })

//////////////////////011 Creating & Removing Elements///////////////////////
// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');

// console.log(name);

// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = 'something new to do';
//   //ul.appendChild(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });


///////////////////012 Event Bubbling (and delegation)////////////////////
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = 'something new to do';
//   ul.appendChild(li);  
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

// ul.addEventListener('click', e => {
//   // console.log('event in UL');
//   console.log(e.target, e);
//   if(e.target.tagName === 'LI'){
//     e.target.remove();
//   }
// });


////////////////013 More DOM Events///////////////////

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//   console.log('OI! my content is copyrighted!!');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//   // console.log(e);
//   // console.log(e.offsetX, e.offsetY);
//   box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//   console.log(e.pageX, e.pageY);
// });

//////////////////014 Building a Popup//////////////////////
// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');

// button.addEventListener('click', () => {
//   popup.style.display = 'block';
// });

// close.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// popup.addEventListener('click', (e) => {
//   if(e.target.className === 'popup-wrapper'){
//     popup.style.display = 'none';
//   }
// });




