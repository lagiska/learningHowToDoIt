const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let userGuess;

console.log("Я загадал число от 1 до 100. Попробуй угадать!");

while (true) {
  userGuess = parseInt(prompt("Введите вашу догадку:"));
  attempts++;

if (userGuess === randomNumber) {
  console.log("Поздравляю! Вы угадали число " + randomNumber);
  console.log("Количество попыток: " + attempts);
  break;
} else if (userGuess < randomNumber) {
  console.log("Больше!");
} else {
  console.log("Меньше!");
}
};