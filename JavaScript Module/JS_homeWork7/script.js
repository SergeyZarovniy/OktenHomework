// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User  (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let userArray = [
//     new User(9,'Sergei','Zarovnyi','fafa@gmail.com',556669887),
//     new User(6,'Yana','Zarovna','bebe@gmail.com',3226568),
//     new User(1,'Stepan','Pupkin','tetete@gmail.com',5446566),
//     new User(2,'Roma','Angush','yayay@mail.com',455546),
//     new User(5,'Ira','Stepanenko','vfvfvfw@gmail.com',65488648468484),
//     new User(7,'Vasia','Streper','wevfbw@gmail.com',65488484),
//     new User(4,'Gosia','Dluga','ththw@gmail.com',654855588874),
//     new User(10,'Bartek','Kachur','whtyyyw@gmail.com',6544448468484),
//     new User(8,'Adam','Nowicky','kilkow@gmail.com',102323333484),
//     new User(3,'Severyn','Glushko','mjkl@gmail.com',25782787)
// ];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayFilter = (arr) => {
//     return arr.filter((value => value.id % 2 === 0 ))
// }
// console.log(arrayFilter(userArray));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arraySort = (arr) => {
//     return arr.sort((a,b) => a.id - b.id );
// }
//
// console.log(arraySort(userArray));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//    constructor(id,name,surname,email,phone,order) {
//        this.id = id
//        this.name = name
//        this.surname = surname
//        this.email = email
//        this.phone = phone
//        this.order = order
//    }
// }
//
// let clientArray = [
//     new Client(9,'Sergei','Zarovnyi','fafa@gmail.com',556669887,['pan','cat','apple']),
//     new Client(6,'Yana','Zarovna','bebe@gmail.com',3226568,['dog','rock','beer']),
//     new Client(1,'Stepan','Pupkin','tetete@gmail.com',5446566,['home','wife','TV']),
//     new Client(2,'Roma','Angush','yayay@mail.com',455546,['phone','spoon','spoon']),
//     new Client(5,'Ira','Stepanenko','vfvfvfw@gmail.com',65488648468484,['bad','pillow','knife']),
//     new Client(7,'Vasia','Streper','wevfbw@gmail.com',65488484,['restroom','pillow']),
//     new Client(4,'Gosia','Dluga','ththw@gmail.com',654855588874,['Game','hat','shoos']),
//     new Client(10,'Bartek','Kachur','whtyyyw@gmail.com',6544448468484,['t-shirt','shorts','hat']),
//     new Client(8,'Adam','Nowicky','kilkow@gmail.com',102323333484,['cat food','dog food','juc']),
//     new Client(3,'Severyn','Glushko','mjkl@gmail.com',25782787,['table','TV','cable'])
// ]
//
// console.log(clientArray);
//
//
// let sortFunction = (arr) => {
//     return arr.sort((a,b) => a.order.length - b.order.length)
// }
// console.log(sortFunction(clientArray));


//ClassWork//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car (model,manufacturer,year,maxSpeed,engineCapacity) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineCapacity = engineCapacity
//     this.drive = function () {
//          console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         return console.log(`
//          Model --- ${this.model},
//          Manufacturer --- ${this.manufacturer} ,
//          Year --- ${this.year},
//          Max Speed --- ${this.maxSpeed} ,
//          Engine Capacity --- ${this.engineCapacity}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed+ newSpeed
//     }
//     this.changeYear = function (newValue) {
//         console.log(` Рік машини змінено на ${this.year = newValue}`)
//     }
//     this.addDriver = function (driver) {
//        this.driver = driver
//     }
// }
// let car1 = new Car('Mazda','MAZDA',2006,230,2.0)
//
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(450)
// car1.changeYear(2022)
// car1.addDriver('Sergei')



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model,manufacturer,year,maxSpeed,engineCapacity) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineCapacity = engineCapacity
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`
//             Model:${model}
//             Manufacturer:${manufacturer}
//             Year:${year}
//             Max Speed:${maxSpeed}
//             Engine Capacity:${engineCapacity}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = maxSpeed + newSpeed
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
// }
//
// let mazdaCar = new Car('Mazda3','MAZDA',2006,230,2.0)
// console.log(mazdaCar);
// mazdaCar.drive();
// mazdaCar.info();
// mazdaCar.increaseMaxSpeed(500);
// mazdaCar.changeYear(2000);
// mazdaCar.addDriver('Zarovnii Serghei')
// console.log(mazdaCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name,age,size) {
//         this.name = name
//         this.age = age
//         this.size = size
//     }
// }
// let cinderellasArray = [
//     new Cinderella('Yana',27,37.5),
//     new Cinderella('Wika',15,36),
//     new Cinderella('Angela',45,38),
//     new Cinderella('Aliona',22,39),
//     new Cinderella('Yulia',29,37),
//     new Cinderella('Agnezka',28,39.5),
//     new Cinderella('Tamara',48,34.5),
//     new Cinderella('Maria',56,36.5),
//     new Cinderella('Liudmila',85,41),
//     new Cinderella('Borislawa',100,45)
// ]
//
// class Prince {
//     constructor(name,age,findShoos) {
//         this.name = name
//         this.age = age
//         this.findShoos = findShoos
//     }
// }
//
// let prince = new Prince('Serghei',30,37.5);


// let cinderellaFinder = (cindArr,prince) => {
//     for (const cindArrElement of cindArr) {
//         if(cindArrElement.size === prince.findShoos) {
//             console.log(`I find my cinderella!!! Her name is ${cindArrElement.name}`)
//         }
//     }
// }

// cinderellaFinder(cinderellasArray,prince);

// let findCinderella = cinderellasArray.find((value => value.size === prince.findShoos))
// console.log(findCinderella);
