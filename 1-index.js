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

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найдовшого слова в масиві.
? Код має працювати для будь-якого масиву рядків.
? Використовуйте цикл для вирішення задачі.
*/
// const genres = ['Jazz', 'Blues', "rock'n'roll", 'Country', 'Reggy'];

// let longWord = genres[0];

// for (const genre of genres) {
//   if (genre.length > longWord.length) {
//   longWord = genre;
//   }
// }
// console.log(longWord)

//task - 24
/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];

//1
// let totalSalary = 0;
// for (let i = 0; i < managerSalaries.length; i += 1) {
//   totalSalary += managerSalaries[i];
// }

// for (let i = 0; i < developersSalaries.length; i++){
//   totalSalary += developersSalaries[i];
// }

// console.log(totalSalary);

//2

// const newSalaryArr = managerSalaries.concat(developersSalaries);
// console.log(newSalaryArr);

// const newSalaryArr = [...developersSalaries, ...managerSalaries];

// let totalSalary = 0;
// for (let i = 0; i < newSalaryArr.length; i++) {
//   totalSalary += newSalaryArr[i];
// }

// console.log(totalSalary);

//The next one

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       console.log(price * quantity);
//     }
//   }
// }

// calcTotalPrice(stones, "Смарагд");
// 26
//
// ? Напиши функцію getStockReport(companyName, stock),
// щоб вона приймала об'єкт параметрів
// з властивостями companyName та stock та виводила репорт
// ? про кількість товарів на складі будь-якої компанії.
// *
// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"
// function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} items in stock`;
// }
// 27
/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

const generateId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function createContact(partialContact) {
  return  {
    list: "default",
    createdAt: Date.now(),
    id: generateId(),
    ...partialContact
  };
  

}
console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);

console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);
