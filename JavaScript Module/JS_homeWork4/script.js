// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function Sumator (a,b) {
//     let answer = a * b;
//     return answer
// }
// console.log(Sumator(100,500));



// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = ['JavaScript','CSS','HTML',5666,47778,253,true];
//
// function ArrayLoop (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// ArrayLoop(arr);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function ParagraphCreator (text) {
//     document.write(`<p>${text}</p>`);
// }
// ParagraphCreator('Hello world')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ListCreator (text) {
//     document.write
//     (`<ul>
//          <li>${text}</li>
//          <li>${text}</li>
//          <li>${text}</li>
//      </ul>`)
// };
// ListCreator('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ListCreator (text,num) {
// document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// document.write(`</ul>`)
// };
//
// ListCreator('JS',100)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = ['Hello',152,'Java',569,'MyDream',56699,false];
//
// function listCreator (arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li> ${arrElement} </li>`)
//     }
//     document.write(`</ul>`)
// }
// listCreator(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//
//     {
//         id: 1,
//         name: 'Dima',
//         age: 32
//     },
//     {
//         id: 2,
//         name: 'Sam',
//         age: 45
//     },
//     {
//         id: 3,
//         name: 'Igor',
//         age: 10
//     },
//     {
//         id: 4,
//         name: 'Vania',
//         age: 29
//     },
//     {
//         id: 5,
//         name: 'Ola',
//         age: 95
//     }
// ];
//
// function objectArray (arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>`)
//         document.write(`<p>${arrElement.id}.name : ${arrElement.name}. age - ${arrElement.age}</p>`)
//         document.write(`</div>`)
//     }
// }
// objectArray(users);

//
// some classwork

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNumber (number1,number2,number3) {
//       if (number1 < number2 && number1 < number3){
//     console.log(number1);
//  } else if (number2 < number1 && number2 < number3) {
//           console.log(number2);
//       } else  {
//           console.log(number3);
//       }
// };
// minimumNumber(550,789,300)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber (number1,number2,number3) {
//     if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2);
//     } else {
//         console.log(number3)
//     };
// };
//
// maxNumber(500,236,4788);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let numArray = [15615,545,57,1551,15874,8778,9895,5441];
//
// function maxNum (arr) {
//     let maxNumber = arr[0]
//     for (const maxNumberElement of arr) {
//         if (maxNumberElement > maxNumber) {
//             maxNumber = maxNumberElement;
//         }
//     }
//     return maxNumber
// }
// console.log(maxNum(numArray))


// - створити функцію яка повертає найменьше число з масиву

// let numArray = [15615,545,57,1551,15874,8778,9895,5441];
//
// function minNum (arr) {
//     let minNum = arr[0];
//     console.log(minNum)
//     for (const minNumElement of arr) {
//         if (minNumElement < minNum){
//             minNum = minNumElement;
//         }
//     }
//     return minNum
// }
//
// console.log(minNum(numArray))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numArray = [15615,545,57,1551,15874,8778,9895,5441];
//
// function arraySum (arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//        sum = arrElement + sum
//     }
//     return sum
// }
//
// console.log(arraySum(numArray));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numArray = [20,50,100,200];
//
// function middleNum (arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = arrElement + sum
//     }
//     return sum/arr.length
// }
//
// console.log(middleNum(numArray))


