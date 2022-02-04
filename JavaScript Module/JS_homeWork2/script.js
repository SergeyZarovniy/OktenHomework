// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Enter time to figure out what time part is');
//    if (time >=0 && time <=15 ) {
//     console.log("Its first part!!!")
// } else if (time >=15 && time <=30){
//     console.log("Its second Part!!!")
// } else if (time >=30 && time <=45){
//        console.log("Its third Part!!!")
//    } else if (time >=45 && time <=59) {
//        console.log("Its fourth Part!!!")
//    } else {
//        console.error('"You enter wrong number"')
//    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('Enter number to know witch part of the month will be that number')
//   if (day >=1 && day <=10) {
//       console.log("Its first part of the month")
// } else if (day >=11 && day <=20) {
//       console.log("Its second part of the month")
//   } else if (day >=21 && day <=31) {
//       console.log("Its third part of the month")
//   } else {
//       console.error('You enter wrong number')
//   }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test;
// if(confirm('???')) {
//     test = "Вірно"
// } else {
//     test = "Неправильно"
// }
// console.log(test)

// let test = confirm("???") ? 'Вірно':'Неправильно';
// console.log(test)


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = prompt('Enter number ');
// if (a !== 0) {
//     console.log('Correct')
// } else {
//     console.log('False')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


// let day = prompt('Enter day of the week');
//  switch (day) {
//      case '1' :
//          console.log('Its Monday!!! Learning Java Script')
//          break
//      case '2':
//          console.log('Its Tuesday!!! Go to work')
//          break
//      case '3':
//          console.log('Its Wednesday!!! Learning HTML')
//          break
//      case '4':
//          console.log('Its Thursday!!! Go to girlfriend')
//          break
//      case '5':
//          console.log('Its Friday!!! Learning React JS')
//          break
//      case '6':
//          console.log('Its Saturday!!! Go to the city')
//          break
//      case '7':
//          console.log('Its Sunday Go to central park')
//      default:
//          console.error('You enter wrong number')
//  }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('Enter number of the year');
//
// if(year % 4 === 0 ){
//     console.log('Its a Leap Year')
// } else {
//     console.log('Its a normal Year')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let answer = prompt('Witch the official name of JavaScript???')
//
// if (answer === 'ECMAScript') {
//     console.log('Correct')
// } else {
//     console.log('You dont know??? Its ECMAScript')
// }