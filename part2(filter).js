const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);



const strings = ["apple", "banana", "cherry", "date"];
const longStrings = strings.filter(str => str.length > 5);
console.log(longStrings); 



const people = [
  {name: "John", age: 25},
  {name: "Anna", age: 17}, 
  {name: "Mike", age: 30}
];
const adults = people.filter(person => person.age >= 18);
console.log(adults); 



const mixedNums = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = mixedNums.filter(num => num > 0);
console.log(positiveNumbers);



const fruits = ["apple", "banana", "avocado", "cherry", "apricot"];
const aStrings = fruits.filter(str => str.startsWith('a'));
console.log(aStrings); 



const products = [
  {name: "book", price: 15},
  {name: "pen", price: 5}
];
const expensiveProducts = products.filter(product => product.price > 10);
console.log(expensiveProducts); 



const dateStrings = ["2024-01-01", "2024-12-31", "2023-01-01"];
const currentDate = new Date();
const futureDates = dateStrings.filter(dateStr => {
  const date = new Date(dateStr);
  return date > currentDate;
});
console.log(futureDates);



const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = nums.filter((num, index, array) => {
  return array.indexOf(num) === index;
});
console.log(uniqueNumbers);