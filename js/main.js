// ФункціЇ
'use strict'
let showMessage 
  if (2 > 1) {
    showMessage = function () {
        console.log('Повідомлення3!');
    }
  }
showMessage();

// Масиви 

// задача 2
let users = ['Ваня', 'Иштван'];

users.push = 'Оля';
console.log(users);

users[1] = 'Петя';
console.log(users);

users.shift();
console.log(users);


users.unshift('Маша', 'Паша');
console.log(users);

// задача 3

let arr = ['Ваня', 'Иштван', 'Оля'];
console.log(arr);

let removed = arr.slice(1, 1);
console.log(removed);

// задача 4

let str = 'Ваня,Иштван,Оля';

let arr1 = str.split(',')
console.log(arr1);

// задача 5 Чому дорівнює  на початку роботи метод?
// let arr4 = [9, 2, 8,];
// let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
//    console.log(previousValue);
// })

// ==========DOM====================================
// задача 1 
// 1.отримати в змінну елемент з атрибутом data-say-hi
// 2.прочитати значенян цього атрибуту
const elData = document.querySelector("[data-say-hi]");
console.log(elData);
console.log(elData.getAttribute("data-say-hi"));

// задача 2

let youchi = document.querySelector('ul li.yonchi');
console.log(youchi);

const like = document.querySelectorAll(".like");
console.log(like);

// ===============розміри, прокрутка, координати===============================
// задача 1 Дізнатися ширину полоси прокрутки

const mainElementWidth = document.documentElement.clientWidth;
console.log(mainElementWidth);

const windowWidth = window.innerWidth;
console.log(windowWidth);

const scroll = windowWidth - mainElementWidth;
console.log(scroll);

// задача 2 Заставити браузер прокрутитися на 100рх 
// через секунду після того як відкрилась сторінка

function setScrollTo () {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth",
    })

}

setTimeout(setScrollTo, 1000);

// задача 3 Отримати координати будь-яких трьох елементів на сторінці
// перший ел
// отримали об'єкт
const elOne = document.querySelector('.main');
// координати відносно вікна браузера
const elOneTop = elOne.getBoundingClientRect().top;
console.log(elOneTop);
const elOneLeft = elOne.getBoundingClientRect().left;
console.log(elOneLeft);
// координати відносно документа
const elOneDocumentTop = elOneTop + window.pageYOffset;
const elOneDocumentLeft  = elOneLeft + window.pageXOffset;
const elOneDocumentPosition = {
	"top": elOneDocumentTop,
	"left": elOneDocumentLeft
};
console.log(elOneDocumentPosition);

// другий ел
const elTwo = document.querySelector('.body-main__column');

const elTwoTop = elTwo.getBoundingClientRect().top;
console.log(elTwoTop);
const elTwoRight = elTwo.getBoundingClientRect().right;
console.log(elTwoRight);

const elTwoDocumentTop = elTwoTop + window.pageYOffset;
const elTwoDocumentRight  = elTwoRight + window.pageXOffset;

const elTwoDocumentPosition = {
	"top": elTwoDocumentTop,
	"right": elTwoDocumentRight
};
console.log(elTwoDocumentPosition);

// третій ел
const elThree = document.querySelector('.korchi');

const elThreeBottom = elThree.getBoundingClientRect().bottom;
console.log(elThreeBottom);
const elThreeRight = elThree.getBoundingClientRect().right;
console.log(elThreeRight);

const elThreeDocumentBottom = elThreeBottom + window.pageYOffset;
const elThreeDocumentRight  = elThreeRight + window.pageXOffset;

const elThreeDocumentPosition = {
	"bottom": elThreeDocumentBottom,
	"right": elThreeDocumentRight
};
console.log(elThreeDocumentPosition);