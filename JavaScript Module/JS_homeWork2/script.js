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