const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(calculate(5, 3, add)); 
console.log(calculate(10, 4, subtract)); 
console.log(calculate(7, 2, multiply)); 
console.log(calculate(15, 3, divide)); 


const squareArray = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};


const square = (num) => num * num;

const numbers = [1, 2, 3, 4, 5];
console.log(squareArray(numbers, square)); 



const filterArray = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

const isEven = (num) => num % 2 === 0;

const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterArray(mixedNumbers, isEven)); 



const formatText = (text, formatter) => {
  return formatter(text);
};

const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();

const message = "Hello World!";
console.log(formatText(message, toUpperCase)); 
console.log(formatText(message, toLowerCase)); 



const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
