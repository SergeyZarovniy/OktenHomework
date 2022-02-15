// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'



// let str  = 'hello world';
// console.log(str.length);

// let str = 'lorem ipsum';
// console.log(str.length);

// let str = 'javascript is cool';
// console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let string = 'hello world';
// console.log(string.toUpperCase());

// let string = 'lorem ipsum';
// console.log(string.toUpperCase());
//
// let string = 'javascript is cool';
// console.log(string.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lowString = 'HELLO WORLD';
// console.log(lowString.toLowerCase());
//
// let lowString = 'LOREM IPSUM';
// console.log(lowString.toLowerCase());
//
// let lowString = 'JAVASCRIPT IS COOL';
// console.log(lowString.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let newOne = str.trim();
// console.log(newOne);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToArray = (string) => {
//     return string.split(' ')
// }
// console.log(stringToArray('Каждый охотник желает знать'))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let dashFunction = (str) => {
//     let newString = str.split(' ').join('-').toUpperCase();
//     return newString
// }
// console.log(dashFunction('HTML JavaScript PHP'))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let stringFunc = (str) => {
//         return  str[0].toUpperCase() +  str.slice(1);
// }
// console.log(stringFunc('java script'))

//classWork//

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arrayInnerFunction = (length,num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random()*num))
//     }
//     return emptyArray
// }
//
// console.log(arrayInnerFunction(100,100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArrayFunction = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//        emptyArr.push(Math.floor(Math.random()*num))
//     }
//    return emptyArr.sort((a,b) => a-b)
// }
//
// console.log(randomArrayFunction(100,100))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filterArrayFunction = (length,num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//        emptyArray.push(Math.floor(Math.random()*num))
//     }
//     return emptyArray.filter((value => value%2 ===0))
// }
// console.log(filterArrayFunction(100,50))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let mapArray = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*num))
//     }
//     return emptyArr.map(value => value.toString())
// }
// console.log(mapArray(100,50))
