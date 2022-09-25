//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
const max = 50;
const min = 23;
let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   //  console.log(i);
//   if (!(i % 2)) {
//     total += i;
//   }
// }

for (let i = max; i >= min; i -= 1) {
  //  console.log(i);
  if (i % 2) {
    continue;
  }
  total += i;
}

console.log(total);
