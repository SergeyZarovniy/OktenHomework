// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let squareRectangle = (a,b) => a * b;
// console.log(squareRectangle(10,50));

// - створити функцію яка обчислює та повертає площу кола

// let circleSquare = (r) => {
// let p = 3.14;
// let square = p * Math.pow(r,2);
//     return square;
// }
// console.log(circleSquare(5))

// - створити функцію яка обчислює та повертає площу циліндру

// let squareCil = (r,h) => {
//     let p = 3.14;
//     let square = 2 * p * r * h;
//     return square
// }
// console.log(squareCil(10,100))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['Ola','Sergei','Dana','Yana',666,false];
//
// let arrayList = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     };
// };
//
// arrayList(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraphList = (text) => {
//     document.write(`<p>${text}</p>`)
// }
//
// paragraphList('Hello world');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let textList = (text) => {
//     document.write('<ul>')
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write('</ul>')
// }
// textList('Hello Padre')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textList = (text,count) => {
//     document.write('<ul>')
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     };
// };
//
// textList('Hello World',10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = ['Privet',1552,true,'Ola','Snap',4848,false];
//
// let showArrayFunction = (arr) => {
//     document.write('<ul>')
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     };
// };
// showArrayFunction(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {id:1, name:'Sergei',age:30},{id:2,name:'Yana',age:27},{id:3,name:'Ivan',age:29}];
//
// let userList = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}.${arrElement.name}-${arrElement.age}</div>`)
//     }
// }
// userList(users)

//Some ClassWork!!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (num1,num2,num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1)
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2)
//     } else {
//         console.log(num3)
//     }
// }
//
// minNumber(100,200,300);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (num1,num2,num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2)
//     } else {
//         console.log(num3)
//     }
// }
//
// maxNumber(100,200,300);


// - створити функцію яка повертає найбільше число з масиву

// let arr = [1515,12,26385,78,1563,4548,521,2136,44];
//
// let maxNum = (arr) => {
//      let max = arr[0];
//         for (const value of arr) {
//         if (value > max) {
//            max = value;
//         }
//     }
//     return max
// }
// console.log(maxNum(arr))


// - створити функцію яка повертає найменьше число з масиву
//
// let arr = [1515,12,26385,78,1563,4548,521,2136,44];
//
// let minNum = (arr) => {
//     let min = arr[0];
//     for (const minValue of arr) {
//         if (minValue < min) {
//             min = minValue;
//         }
//     }
//     return min
// }
//
// console.log(minNum(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [10,20,30,50];
//
// let arrSum = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//        sum =  sum + arr[i];
//     }
//     return sum
// }
//
// console.log(arrSum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10,50,25];
//
// let calculateFunc = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i] / arr.length
//     }
//     return sum
// }
// console.log(calculateFunc(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let numbList = (...arg) => {
// let min = arg[0];
// let max = arg[0];
//     for (const value of arg) {
//         if (value > max) {
//             max = value
//         }  if (value < min) {
//             min = value
//         }
//     }
//     console.log(max)
//     return min
// }
//
// console.log(numbList(25,36,15,5555))

// - створити функцію яка заповнює масив рандомними числами
//
// let arrayInner  = (nums) => {
//     let emptyArr = [];
//     for (let i = 0; i < nums; i++) {
//        emptyArr.push(Math.floor(Math.random()*100))
//     }
//     return emptyArr
// }
//
// console.log(arrayInner(15))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrayInner = (length,limit) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*limit))
//     }
//     return emptyArr
// }
//
// console.log(arrayInner(15,10))