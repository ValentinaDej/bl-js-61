// //Напишіть цикл, який виводить у консоль
// // числа від max до min за спаданням
// // Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;
// let total = 0;

// // for (let i = max; i >= min; i -= 1) {
// //   //  console.log(i);
// //   if (!(i % 2)) {
// //     total += i;
// //   }
// // }

// for (let i = max; i >= min; i -= 1) {
//   //  console.log(i);
//   if (i % 2) {
//     continue;
//   }
//   total += i;
// }

// console.log(total);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій перебувати цей підрядок
*/
// const string = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
// const normalizedString = string.toLowerCase();
// const normalizedNewString = "JS".toLowerCase();
// console.log(normalizedString.indexOf(normalizedNewString));

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const string = "abcde";

// // if (string.startsWith("a")) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// const message = string.startsWith("a") ? true : false;
// console.log(message);
// /*
// ? У змінній min лежить число від 0 до 59.
// ? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// ? [0 до 15) – перша чверть години
// ? [15 до 30) – друга чверть години
// ? [30 до 45) –друга чверть години
// ? [45 до 60) – друга чверть години
// */
// const time = 72;
// if (time >= 0 && time < 15) {
//   console.log("перша чверть години");
// } else if (time >= 15 && time < 30) {
//   console.log("друга чверть години");
// } else if (time >= 30 && time < 45) {
//   console.log("третя чверть години");
// } else if (time >= 45 && time < 60) {
//   console.log("четверта чверть години");
// } else {
//   console.log("Багато годин пора спати!");
// }

/*
? Напиши скрипт пошуку найменшого слова  у масиві.
? Код має працювати для будь-якого масиву слів.
? Використовуйте цикл для вирішення задачі.
*/
//const genres = ["Jazz", "Blues", "rock'n'roll", "Country", "Reggy"];
//let smallestWord = genres[0];

//for (const word of genres) {
//  if (word.length < smallestWord.length) {
//    smallestWord = word;
//  }
//}
//console.log(smallestWord);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 15000, 40000];

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 15000, 40000];
// const newSalery = developersSalaries.concat(managerSalaries);
// console.log(newSalery);
// let total = 0;
// for (const salery of newSalery) {
//   total += salery;
// }
// console.log(total);

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
*/
// function calcAverage() {
//     let total = 0;
//     let count = 0;

//     for (const argument of arguments){
//         if (typeof argument !== "number") {
//             continue
//         }
//         console.log(typeof argument)
//         total += argument;
//         count += 1;
//     }
//     console.log(total / count);
// };
// calcAverage(5, 6, 8, "a", "h");

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */
// const array = ['Jass', 'Blues']

// array.push("rock'n'roll");
// // console.log(array[0]);
// // console.log(array[array.length - 1]);
// // console.log(array.splice(0, 1));
// // console.log(array.shift());

// console.log(array.splice(0, 0,"Country", "Reggy"));
// console.log(array);