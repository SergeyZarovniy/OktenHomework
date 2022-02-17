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

//
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
