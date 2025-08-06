//1-masala
// const user = { name: "Ali", age: 25 };

// function getUserInfo(user) {
//   return `Foydalanuvchi ismi: ${user.name}, yoshi: ${user.age}`;
// }

// const result = getUserInfo(user);
// console.log(result);
//2-masala
// const product = { name: "Telefon", price: 1000 };

// function soliq(product) {
//   product.priceWithTax = product.price * 1.12;
//   return product;
// }

// const result = soliq(product);
// console.log(result);
//3-masala
// const car = { model: "Cobalt", year: 2022, color: "oq" };

// function malumot(car) {
//   return `Bu ${car.color} rangli ${car.model}, ${car.year}-yil`;
// }

// const result = malumot(car);
// console.log(result);

//4-masala
// const user = { name: "Ali", email: "ali@gmail.com" };

// function email(user) {
//   return "email" in user;
// }

// const result = email(user);
// console.log(result);

//5-masala
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1500 },
// ];

// function getTotalSalary(employees) {
//   let total = 0;
//   for (let maosh = 0; maosh < employees.length; maosh++) {
//     total += employees[maosh].salary;
//   }
//   return total;
// }

// const result = getTotalSalary(employees);
// console.log(result);

//6-masala
// const car = { model: "Cobalt", distance: 150, time: 3 };

// function calculateSpeed(car) {
//   car.speed = car.distance / car.time;
//   return car;
// }

// const result = calculateSpeed(car);
// console.log(result);

//7-masala
// const worker = { name: "Ali", start: 9, end: 18 };

// function calculateWorkTime(worker) {
//   worker.hoursWorked = worker.end - worker.start;
//   return worker;
// }

// const result = calculateWorkTime(worker);
// console.log(result);

//8-masala

// const cube = { side: 4 };

// function calculateVolume(cube) {
//   cube.volume = cube.side ** 3; // yoki Math.pow(cube.side, 3)
//   return cube;
// }

// const result = calculateVolume(cube);
// console.log(result);

//9-masala

// const user1 = { username: "test", password: "12345678" };
// const user2 = { username: "test", password: "1234" };

// function isPasswordStrong(user) {
//   user.isStrong = user.password.length > 8;
//   return user;
// }

// console.log(isPasswordStrong(user1));

// console.log(isPasswordStrong(user2));

//10-masala

// const person = { name: "Laylo", age: 20 };

// function calculateBirthYear(person) {
//   const currentYear = 2025;
//   person.birthYear = currentYear - person.age;
//   return person;
// }

// const result = calculateBirthYear(person);
// console.log(result);

//11-masala

// const user = Object.freeze({ name: "Ulug'bek", age: 20 });

// function updateUser(user) {
//   if (Object.isFrozen(user)) {
//     console.log("Object is frozen");
//   } else {
//     user.age += 1;
//     console.log("User updated:", user);
//   }
// }

// updateUser(user);

//12-masala

// const car = Object.freeze({ model: "Malibu" });

// function checkFrozenStatus(obj) {
//   return Object.isFrozen(obj) ? "Frozen" : "Not frozen";
// }

// const result = checkFrozenStatus(car);
// console.log(result)

//13-masala

// const person = { name: "Ali" };
// Object.seal(person); // obyektni yopamiz

// function addProperty(obj, key, value) {
//   if (Object.isSealed(obj)) {
//     console.log("Cannot add new property");
//   } else {
//     obj[key] = value;
//     console.log("Property added:", obj);
//   }
// }

// addProperty(person, "age", 25);
//14-masala

// const phone = Object.seal({ brand: "iPhone" });

// function isItSealed(obj) {
//   return Object.isSealed(obj) ? "Sealed" : "Not sealed";
// }

// const result = isItSealed(phone);
// console.log(result);

//15-masala

// const book = { title: "JS Fundamentals", author: "Mirzo" };

// function checkProperty(obj, key) {
//   return key in obj;
// }

// console.log(checkProperty(book, "author"));
// console.log(checkProperty(book, "price"));
