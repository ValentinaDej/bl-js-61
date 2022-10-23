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

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// function createContact(partialContact) {
//   return  {
//     list: "default",
//     createdAt: Date.now(),
//     id: generateId(),
//     ...partialContact
//   };

// }
// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// const people = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
// ];
// //нарцис  'Jhon'

// const people2 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: ["Eva"],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //Нарцис Eva'

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Eva"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //немає нарциса

// const people4 = [
//   {
//     name: "Alex",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Eva"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Eva"],
//   },
// ];
// //немає нарциса'

// // //Нарциса знають всі, нарцис незнає нікого

// const findNartsys = function (array) {
//   let nartsysName = "";
//   for (const arr of array) {
//     if (arr.know.length === 0) {
//       nartsysName = arr.name;
//     }
//   }
//   if (nartsysName === "") {
//     console.log("Немає нарциса");
//     return;
//   }
//   for (const arr of array) {
//     if (arr.name === nartsysName) {
//       continue;
//     }
//     if (!arr.know.includes(nartsysName)) {
//       console.log("Немає нарциса");
//       return;
//     }
//   }

//   console.log(nartsysName);
// };

// findNartsys(people4);

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";

// user["mood"] = "happy";

// const userMood = "mood";
// user[userMood] = "happy";

// // user.hobby = 'skydiving';
// // user["hobby"] = 'skydiving';

// const userHobby = "hobby";
// user[userHobby] = 'skydiving';

// delete user.premium;

// delete user["age"];

// for (const key of Object.keys(user)) {
//   console.log(key);

// }

// console.log(user);

/*
? Код отримує з масиву рядків новий масив, що містить довжини рядків
*/
// const wordsArr = ['Існує', 'життя', 'на', 'Марсі'];

// const lengthWord = wordsArr.map((item) => item.length);

// console.log(lengthWord);

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const newArrey = celsius.map((item) => {
//   return item * 1.8 + 32;
// });

// console.log(newArrey);
// ? Відфільтруйте масив, щоб залишилися тільки парні

// const numbers = [1, 2, 3, 4, 5, 6];
// const filterNumbers = numbers.filter((number) => !(number % 2));
// console.log(filterNumbers);

/*
? Відфільтруйте масив heroes за ключем об'єкта franchise.
*/

// const heroes = [
//   { name: "Batman", franchise: "DC" },
//   { name: "Ironman", franchise: "Marvel" },
//   { name: "Thor", franchise: "Marvel" },
//   { name: "Superman", franchise: "DC" },
// ];

// const franchiseArray = heroes.filter(({ franchise }) => franchise === "Marvel");
// console.log(franchiseArray);
// 3-5
// ? Нехай функція filterByPrice повертає масив автомобілів ціна яких
// ? менше ніж значення параметра threshold.
// */
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },

  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// const filterByPrice = (array, threshold) => {
//   return array.filter((item) => item.price < threshold);
// };
// console.log(filterByPrice(cars, 25000));
// 3-6


// 3-6
/*
?Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/
// function getCarsWithType(array, type) {
//  return array.filter((item) => item.type === type) 
// };

// console.log(getCarsWithType(cars, 'suv'));

// // ?Залишити тільки унікальні числа
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// // const uniqueNums = numbers.filter((num, index, array) => array.indexOf(num) === index);

// const uniqueNums = numbers.reduce((acc, num) => acc.includes(num)? acc : [...acc, num], []);

// console.log(uniqueNums);

