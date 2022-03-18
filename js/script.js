'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movie: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movie[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   alert('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   alert('Вы киноман');
// } else {
//   alert('Произошла ошибка');
// }

// console.log(personalMovieDB);

// let login = prompt(`Введите логин`, '');
// let userName = 'Admin';
// let userPassword = 'Я главный';

// if (login === userName) {
//   let password = prompt(`Введите пароль`, '');

//   if (password === userPassword) {
//     alert('Здравствуйте!');
//   } else if (password === null || password === '') {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }

// } else if (login === '' || login === null) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю!');
// }

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 11));

// console.log(logg.substr(6, 4));


//Работа с DOM

// const header = document.querySelector('#header');
// const navLinks = document.querySelectorAll('.navLink');
// const testBtn = document.querySelector('#testBtn');

// window.addEventListener('scroll', checkScroll);
// document.addEventListener('DOMContentLoaded', checkScroll);

// function checkScroll() {
//     let scrollPos = window.scrollY;

//     if (scrollPos != 0) {
//         header.classList.add('red');
//     } else {
//         header.classList.remove('red');
//     }
// }

// testBtn.addEventListener('click', function() {
//     console.log('clicked');
// });

// for (let navItem of navLinks) {
//     navItem.addEventListener('click', function() {
//         console.log(navItem.text);
//     });
// }

// Табы на JS

// const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
// const tabsPage = document.querySelectorAll('.tabs__item');

// tabsBtn.forEach(onTabClick);

// function onTabClick(item) {
//     item.addEventListener('click', function () {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);

//         if (!currentBtn.classList.contains('active')) {
//             tabsBtn.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             tabsPage.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             currentBtn.classList.add('active');
//             currentTab.classList.add('active');
//         }
//     });
// }

// document.querySelector('.tabs__nav-btn').click();

// const login = prompt(`Кто там?`, '');
// const account = 'admin';

// if (login === account) {
//     const password = prompt(`Пароль?`, '');

//     if (password === 'я главный') {
//         alert('Здравствуйте');
//     } else if (password === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль!');
//     }

// } else if (login === null || login === '') {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }


// const userName = 'Oleg';
// console.log(userName.toUpperCase());
// console.log(userName.indexOf('eg'));
// console.log(userName.toLowerCase().startsWith('ole'));
// console.log(userName.repeat(3));

// const string = '       password        ';
// console.log(string.trimRight());

// function logPerson(s, name, age) {
//     if (age <= 0) {
//         age = 'Еще не родился';
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }
// const personName = 'Oleg';
// const personAge = 29;
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`;

// console.log(output);


//Function declaration

// function greet(name) {
//     console.log('Hello - ', name);
// }

// greet('Olo');


// const greet2 = function(name) {
//     console.log('Hello - ', name);
// }

// greet2('Ele');

var age = prompt('Сколько вам лет?');

var sayHi = (age >= 18) ?
  function() { alert('Прошу Вас!');  } :
  function() { alert('До 18 нельзя'); };

sayHi();

