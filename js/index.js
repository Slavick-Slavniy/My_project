"use strict";
// # Модуль 1.

// ## Example 1 - Базові математичні операції

// Виведи на екран загальну кількість яблук і винограду. Різницю я та винограду
//  const apples = 47;
//  const grapes = 135;
//  const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);


// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів
// `result`.
// const result = 108 + 223 - (2 * 5);
// console.log(result);


// ## Example 4 - Клас Math

// Напиши код який виводить в консоль округлення вверх / вниз.Використовуй методи`Math.floor()`,
// `Math.ceil()` і`Math.round()`.
//  const value = 27.5;
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(Math.pow(value,3));


// ## Example 5 - Шаблонні рядки

// Склади фразу`A has B bots in stock`, де A, B - це змінні

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${'Cyberdyne Systems'} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// ## Example 6 - Оператори порівняння і приведення типів

// Яким буде результат виконання коду?

// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '22'); // false

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // fals

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

// console.log(undefined === null); // false

// console.log(NaN === NaN); // false


// ## Example 7 - Опертор % та методы рядків

// Напиши код який переводить значення`totalMinutes`(кількість хвилин) в формат
//  `HH:MM`

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

// ## Example 8 - Логічні оператори

// Яким буде результат виразу

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```
























//Завдання 8

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Завдання 9

// Варіант 1
// function add(a, b, c) {
//   // Change code below this line
//     return a + b + c;
//   // Change code above this line
// }
// add(2 + 5 + 8);

// let rezult = add(15, 27, 10); // 52
// console.log(rezult)

// rezult = add(10, 20, 30); // 60
// console.log(rezult);

// rezult = add(5, 10, 15); // 30
// console.log(rezult);

// Варіант 2
// function add(a, b, c) {
//   // Change code below this line

// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



