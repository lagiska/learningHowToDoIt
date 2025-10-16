//easy

const student = {
  name: "Иван",
  age: 15,
  grade: 8
};

console.log(`Студент ${student.name} учится в ${student.grade} классе и ему ${student.age} лет.`);


student.grade += 1;
student.hobby = "Рисование";
console.log(student);


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}


const settings = {
  theme: 'dark',
  volume: 80
};

if ('theme' in settings) {
  console.log(settings.theme);
} else {
  console.log('Свойство не найдено');
}


const movies = [
  {title: 'Inception', director: 'Christopher Nolan', year: 2010},
  {title: 'The Matrix', director: 'Lana Wachowski', year: 1999},
  {title: 'Interstellar', director: 'Christopher Nolan', year: 2014}
];

console.log("Фильмы выпущенные до 2005 года:");
for (let i = 0; i < movies.length; i++) {
  if (movies[i].year < 2005) {
    console.log(movies[i].title);
  }
}


let nolanMoviesCount = 0;
for (let i = 0; i < movies.length; i++) {
  if (movies[i].director === 'Christopher Nolan') {
    nolanMoviesCount++;
  }
}
console.log(`Количество фильмов Кристофера Нолана: ${nolanMoviesCount}`);



//medium


const cart = [
  {name: 'Книга', price: 15, quantity: 2}, 
  {name: 'Кофе', price: 25, quantity: 1}, 
  {name: 'Фонарик', price: 10, quantity: 3}
];

let totalCost = 0;
for (let i = 0; i < cart.length; i++) {
  totalCost += cart[i].price * cart[i].quantity;
}
console.log(`Общая стоимость корзины: ${totalCost}`);


const users = [
  {id: 1, name: 'Alice', isOnline: true}, 
  {id: 2, name: 'Bob', isOnline: false}, 
  {id: 3, name: 'Charlie', isOnline: true}
];

let firstOnlineUser = null;
for (let i = 0; i < users.length; i++) {
  if (users[i].isOnline === true) {
    firstOnlineUser = users[i];
    break;
  }
}
console.log("Первый онлайн пользователь:", firstOnlineUser);


const animals = [
  {name: 'Кот', type: 'домашнее'}, 
  {name: 'Медведь', type: 'дикое'}, 
  {name: 'Собака', type: 'домашнее'}, 
  {name: 'Лиса', type: 'дикое'}
];

const domestic = [];
const wild = [];

for (const animal of animals) {
  if (animal.type === 'домашнее') {
    domestic.push(animal);
  } else if (animal.type === 'дикое') {
    wild.push(animal);
  }
}
console.log("Домашние животные:", domestic);
console.log("Дикие животные:", wild);


const players = [
  {name: 'Анна', score: 85}, 
  {name: 'Борис', score: 95}, 
  {name: 'Вика', score: 76}
];

let minScore = players[0].score;
let minPlayer = players[0];

for (let i = 1; i < players.length; i++) {
  if (players[i].score < minScore) {
    minScore = players[i].score;
    minPlayer = players[i];
  }
}
console.log(`Игрок с наименьшим счетом: ${minPlayer.name}, счет: ${minPlayer.score}`);


const newProducts = [
  {id: 4, name: 'Чашка'}, 
  {id: 5, name: 'Блюдце'}
];

const oldProducts = [
  {id: 1, name: 'Ложка'}, 
  {id: 2, name: 'Вилка'}
];

const allProducts = [...oldProducts, ...newProducts];
console.log("Все товары: ", allProducts);