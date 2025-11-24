const numbers = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log(doubled);



const strings = ["apple", "banana", "cherry"];
const lengths = strings.map(str => str.length);
console.log(lengths);



const people = [{name: "John", age: 25}, {name: "Anna", age: 30}];
const names = people.map(person => person.name);
console.log(names);



const cels = [0, 15, 25, 30, -5];
const fahrenheit = cels.map(temp => temp * 9/5 + 32);
console.log(fahrenheit);



const arr = [1, 4, 9, 16];
const squares = arr.map(num => {
  return {value: num, square: num * num};
});
console.log(squares);



const words = ["hello", "world", "javascript"];
const capitalized = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalized);



const nums = [1, 2, 3, 4, 5];
const modified = nums.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});
console.log(modified);



const mixedItems = [1, "2", 3, "4", 5];
const coll = mixedItems.map(item => {
  if (typeof item === 'string') {
    return Number(item);
  } else {
    return item;
  }
});
console.log(coll);



const products = [{name: "apple", price: 1.2}, {name: "banana", price: 0.8}];
const discountedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price,
    discountedPrice: product.price * 0.9
  };
});
console.log(discountedProducts);