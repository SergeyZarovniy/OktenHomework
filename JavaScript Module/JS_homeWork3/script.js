// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arr = [34,87,97,89,134,666];
// console.log(arr);

// let arr = ['hello','world','JavaScript','EcmaScript','CSS'];
// console.log(arr);

// let arr = [126,'world',true,'Ecma',76809,'coding',false,98,'peace'];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'Whats';
// arr[1] = 'Up';
// arr[2] = 'Bro';
// arr[3] = 'How';
// arr[4] = 'Is';
// arr[5] = 'Your';
// arr[6] = 'Day';
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello world</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//    document.write(`<div>Hello world <div/> ${i} ` );
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let b = 0;
// while (b < 10) {
//     document.write(`<div><h1>Hello world</h1><div/>`);
//     b++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let b = 0;
// while (b < 20) {
//     document.write(`<div><h1>Hello world</h1><div/> ${b}`)
//     b++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [12,10,36,95,65,347,785,22,33,546,71,986,321];
//
// for (const number of arr) {
//     console.log(number);
// };

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі

// let stringArr = ['SWAT','JAVA','OKTEN','JS','Piton','C++','Ruby','JS','CSS','HTML','Node','TypeScript'];
// for (const string of stringArr) {
//     console.log(string)
// };

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [true,456,'Js',false,48848,'Minor','welcome',4545];
// for (const arrElement of arr) {
//     console.log(arrElement)
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['Hello','JavaScript','CSS',555,444,666,true,false,896,'Const'];
//
// for (let i = 0; i < arr.length; i++) {
//  if (typeof arr[i] === 'boolean') {
//      console.log(arr[i])
//  };
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['Hello','JavaScript','CSS',555,444,666,true,false,896,'Const'];
//
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') {
//         console.log(arr[i])
//     };
// };

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = ['Hello','JavaScript','CSS',555,444,666,true,false,896,'Const'];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i])
//     };
// };

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'Hello';
// arr[1] = 'World';
// arr[2] = 'Java';
// arr[3] = 'String';
// arr[4] = 666;
// arr[5] =789;
// arr[6] = 478;
// arr[7] = true;
// arr[8] = false;
// arr[9] = 'boolean';
// for (const arrElement of arr) {
//     console.log(arrElement)
// };

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('step: ' + i );
//     document.write(`step  ${+i} + ' '`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('step :' +i);
//     document.write(`step: ${+i}` + ' ')
// };


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log('step :' +i);
//     document.write(`step: ${+i}` + ' ');
// };


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 === 0 ) {
//         console.log('step :' +i);
//         document.write(`step: ${+i}` + ' ');
//     }
// }

//
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 !== 0 ) {
//         console.log('step :' +i);
//         document.write(`step: ${+i}` + ' ');
//     };
// };

// Some classwork


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = 0;
// while (j < arr.length){
//     console.log(arr[j])
//     j++;
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = 0;
// while (j < arr.length) {
//     if (j % 2 !== 0 ) {
//         console.log(arr[j]);
//     }
//     j++;
// };

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (i%2 !==0) {
//         console.log(arr[i])
//     }
// }


// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = 0;
// while (j < arr.length) {
//     if (arr[j] % 2 ===0) {
//         console.log(arr[j])
//     }
//     j++
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ===0) {
//      console.log(arr[i])
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3 === 0){
//         arr[i] = 'okten';
//         console.log(arr)
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0; i--) {
//   console.log(arr[i])
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = arr.length -1;
// while (j >= 0) {
//     console.log(arr[j])
//     j--;
// }
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = arr.length-1;
// while (j >= 0) {
//     if (j%2 ===0) {
//         console.log(arr[j])
//     }
//     j--;
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >= 0; i--) {
//     if (i%2 ===0) {
//         console.log(arr[i])
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = arr.length-1;
// while (j >= 0) {
//     if (arr[j]%2 ===0) {
//         console.log(arr[j])
//     }
//     j--;
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i]%2 ===0) {
//         console.log(arr[i])
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length; i >= 0; i--) {
//    if (arr[i]%3 ===0){
//        arr[i] = 'okten'
//        console.log(arr)
//    }
// }