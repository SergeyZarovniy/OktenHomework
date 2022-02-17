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

