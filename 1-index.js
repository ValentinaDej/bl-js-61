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
<<<<<<< Updated upstream

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
const time = 72;
if (time >= 0 && time < 15) {
  console.log("перша чверть години");
} else if (time >= 15 && time < 30) {
  console.log("друга чверть години");
} else if (time >= 30 && time < 45) {
  console.log("третя чверть години");
} else if (time >= 45 && time < 60) {
  console.log("четверта чверть години");
} else {
  console.log("Багато годин пора спати!");
}
=======
/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/
>>>>>>> Stashed changes
