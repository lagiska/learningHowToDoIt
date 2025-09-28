let userInput = parseInt(prompt("Введите число N:"));
for (let i = 1; i <= userInput; i++) {
  console.log(i);
};


let N = parseInt(prompt("Введите число N:"));
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
};
console.log("Сумма чисел от 1 до " + N + " = " + sum);


for (let i = 0; i <= 100; i += 2) {
  console.log(i);
};


let number;
do {
  number = parseInt(prompt("Введите число:"));
} while (number % 2 !== 0);
console.log("Вы ввели четное число: " + number);


let sum = 0;
let count = 0;
let input;

while (true) {
  input = prompt("Введите число или 'стоп' для завершения:");
  
  if (input === "стоп") {
    break;
  }
    
  let num = parseFloat(input);
  sum += num;
  count++;
}

if (count > 0) {
  let average = sum / count;
  console.log("Сумма: " + sum);
  console.log("Количество чисел: " + count);
  console.log("Среднее арифметическое: " + average);
} else {
  console.log("Числа не были введены");
};



let maximum = null;
let userInput;
while (userInput !== "стоп") {
  userInput = prompt("Введите число или 'стоп' для завершения:");
    
  if (userInput !== "стоп") {
    let num = parseFloat(userInput);
      if (maximum === null || num > maximum) {
        maximum = num;
      }
    }
};
if (maximum !== null) {
    console.log("Максимальное число: " + maximum);
} else {
    console.log("Вы не ввели ни одного числа");
};


let str = prompt("Введите строку:");
let reversed = "";
    
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Перевернутая строка: " + reversed);



let string = prompt("Введите строку:").toLowerCase();
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (string[i] === vowels[j]) {
      count++;
      break;
    }
  }
}
console.log("Количество гласных: " + count);



let str = prompt("Введите строку с буквами 'a': ");
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'A') {
    result += 'i';
  } else {
    result += str[i];
  }
}
console.log("Результат замены: " + result);