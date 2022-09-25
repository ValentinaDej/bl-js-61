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
const string = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
const normalizedString = string.toLowerCase();
const normalizedNewString = "JS".toLowerCase();
console.log(normalizedString.indexOf(normalizedNewString));
