//easy

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);


let numbers = [3, 7, 2, 9, 5];
let max = Math.max(...numbers);
console.log(max);


let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';
let found = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === search) {
    found = true;
    break;
  }
}
if (found) {
    console.log("Найден элемент");
} else {
    console.log("Элемент не найден");
}


let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';
if (fruits.includes(search)) {
  console.log("Найден элемент");
} else {
  console.log("Элемент не найден");
}


let arr = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr);


let arr = [1, 2, 3, 4, 5];
let reversedArr = [...arr].reverse();
console.log(reversedArr);


//medium

let numbers = [1, 2, 3, 2, 4, 2, 5];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 2) {
    count++;
  }
}
console.log(count);


let numbers = [1, 2, 3, 2, 4, 2, 5];
let count = numbers.filter(num => num === 2).length;
console.log(count);


let arr = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let average = sum / arr.length;
console.log(average);


let arr = [10, 20, 30, 40];
let average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
console.log(average);


let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  }
}
console.log(evenNumbers);


let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);


let arr = [1, 2, 3];
let doubledArr = [];
for (let i = 0; i < arr.length; i++) {
  doubledArr.push(arr[i] * 2);
}
console.log(doubledArr);


let arr = [1, 2, 3];
let doubledArr = arr.map(num => num * 2);
console.log(doubledArr);


//hard

let combined = [];
for (let i = 0; i < arr1.length; i++) {
  combined.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  let found = false;
  for (let j = 0; j < combined.length; j++) {
    if (combined[j] === arr2[i]) {
      found = true;
      break;
    }
  }
    if (!found) {
      combined.push(arr2[i]);
  }
}
console.log(combined);


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let combined = [...new Set([...arr1, ...arr2])];
console.log(combined);


// Без метода
let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
  let isUnique = true;
  for (let j = 0; j < unique.length; j++) {
    if (unique[j] === numbers[i]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    unique.push(numbers[i]);
  }
}
console.log(unique);


let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = numbers.filter((item, index) => numbers.indexOf(item) === index);
console.log(unique);



let numbers = [5, 3, 8, 1, 2];
let n = numbers.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);