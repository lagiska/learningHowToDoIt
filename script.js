const age = prompt('Введите ваш возраст:');
if (age < 18) {
    alert('Доступ запрещен');
} else {
    alert('Доступ разрешен');
}


const number = prompt('Введите число: ');
console.log(number % 2 === 0 ? 'Чётное' : 'Нечётное');



const num1 = parseFloat(prompt('Введите первое число:'));
const num2 = parseFloat(prompt('Введите второе число:'));
const operator = prompt('Введите оператор (+, -, *, /):');

let result;
switch (operator) {
  case '+':
    result = num1 + num2;
      break;
  case '-':
    result = num1 - num2;
      break;
  case '*':
    result = num1 * num2;
      break;
  case '/':
    result = num1 / num2;
      break;
  default:
        result = 'Неверный оператор';
}

alert(`${num1} ${operator} ${num2} = ${result}`);



const inputString = prompt('Введите строку:');
if (inputString.length > 10) {
    const firstPart = inputString.slice(0, 5);
    const stars = '*'.repeat(inputString.length - 5);
    console.log(firstPart + stars);
} else {
    console.log(inputString.toUpperCase());
}


const hour = parseInt(prompt('Введите текущий час (0-23):'));
if (hour >= 0 && hour <= 5) {
  console.log('Ночь');
} else if (hour >= 6 && hour <= 11) {
  console.log('Утро');
} else if (hour >= 12 && hour <= 17) {
  console.log('День');
} else if (hour >= 18 && hour <= 23) {
  console.log('Вечер');
} else {
  console.log('Неверное время');
}



const email = prompt('Введите e-mail:');
if (email.includes('@') && email.includes('.')) {
    alert('Верный формат');
} else {
    alert('Ошибка!');
}



const word = prompt('Введите слово:');
const reversedWord = word.split('').reverse().join('');
console.log(word === reversedWord);