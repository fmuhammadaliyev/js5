//1-masala
const user = { name: "Ali", age: 25 };

function getUserInfo(user) {
  return `Foydalanuvchi ismi: ${user.name}, yoshi: ${user.age}`;
}

const result1 = getUserInfo(user);
console.log(result);
//2-masala
const product = { name: "Telefon", price: 1000 };

function soliq(product) {
  product.priceWithTax = product.price * 1.12;
  return product;
}

const result = soliq(product);
console.log(result);
//3-masala
const car = { model: "Cobalt", year: 2022, color: "oq" };

function malumot(car) {
  return `Bu ${car.color} rangli ${car.model}, ${car.year}-yil`;
}

const result3 = malumot(car);
console.log(result);

//4-masala
const user4 = { name: "Ali", email: "ali@gmail.com" };

function email(user4) {
  return "email" in user4;
}

const result4 = email(user4);
console.log(result4);

//5-masala
const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1500 },
];

function getTotalSalary(employees) {
  let total = 0;
  for (let maosh = 0; maosh < employees.length; maosh++) {
    total += employees[maosh].salary;
  }
  return total;
}

const result2 = getTotalSalary(employees);
console.log(result2);

//6-masala
const carr = { model: "Cobalt", distance: 150, time: 3 };

function calculateSpeed(carr) {
  carr.speed = carr.distance / carr.time;
  return carr;
}

const resultt = calculateSpeed(car);
console.log(resultt);

//7-masala
const worker = { name: "Ali", start: 9, end: 18 };

function calculateWorkTime(worker) {
  worker.hoursWorked = worker.end - worker.start;
  return worker;
}

const resullt = calculateWorkTime(worker);
console.log(resullt);

//8-masala

const cube = { side: 4 };

function calculateVolume(cube) {
  cube.volume = cube.side ** 3;
  return cube;
}

const resulty = calculateVolume(cube);
console.log(resul);

//9-masala

const user1 = { username: "test", password: "12345678" };
const user2 = { username: "test", password: "1234" };

function isPasswordStrong(user) {
  user.isStrong = user.password.length > 8;
  return user;
}

console.log(isPasswordStrong(user1));

console.log(isPasswordStrong(user2));

//10-masala

const person = { name: "Laylo", age: 20 };

function calculateBirthYear(person) {
  const currentYear = 2025;
  person.birthYear = currentYear - person.age;
  return person;
}

const resultty = calculateBirthYear(person);
console.log(resultty);

//11-masala
const updateUser = function (user7) {
  if (Object.isFrozen(user7)) {
    console.log("Object is frozen");
  }
};

const user7 = Object.freeze({ name: "Ulug'bek", age: 25 });
updateUser(user7);

//12-masala
const checkFrozenStatus = function (obj) {
  return Object.isFrozen(obj);
};

const car9 = Object.freeze({ model: "cls 63" });
console.log(checkFrozenStatus(car9));

// 13-masala
const addProperty = function (obj, key, value) {
  if (Object.isSealed(obj)) {
    return "Cannot add new property";
  }
};

const person88 = { name: "Ali" };
Object.seal(person88);
console.log(addProperty(person88, "age", 25));

//14-masala
function isItSealed(obj) {
  if (Object.isSealed(obj)) {
    return "Sealed";
  } else {
    return "Not sealed";
  }
}
const phone = Object.seal({ brand: "iPhone" });
console.log(isItSealed(phone));

//15-masala
const checkProperty = function (obj, key) {
  return key in obj;
};

const book = { title: "JS Fundamentals", author: "Mirzo" };
console.log(checkProperty(book, "author"));
console.log(checkProperty(book, "price"));
