let car = { brand: 'Toyota', model: 'Camry', year: 2021 };
let carKeys = Object.keys(car);
console.log('Ключи объекта car:', carKeys);


let fruitPrices = { apple: 50, banana: 30, orange: 70 };
let prices = Object.values(fruitPrices);
let totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log('Общая сумма цен фруктов:', totalPrice);


let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 };
let bookEntries = Object.entries(book);
console.log('Пары ключ-значение объекта book:', bookEntries);


let countProperties = (obj) => {
  return Object.keys(obj).length;
};


let testObj = { a: 1, b: 2, c: 3, d: 4 };
console.log('Количество свойств в testObj:', countProperties(testObj));


let scores = { Alex: 100, Bob: 75, Charlie: 95 };
let scoreValues = Object.values(scores);
let maxScore = Math.max(...scoreValues);
console.log('Максимальный результат:', maxScore);


let sumNumericalValues = (obj) => {
    let values = Object.values(obj);
    let sum = 0;
    
    values.forEach(value => {
        if (typeof value === 'number') {
            sum += value;
        }
    });
    
    return sum;
};

let mixedObj = { a: 10, b: 'hello', c: 25, d: true, e: 5 };
console.log('Сумма числовых значений:', sumNumericalValues(mixedObj));


let toQueryString = (obj) => {
    let entries = Object.entries(obj);
    let queryParts = entries.map(([key, value]) => {
        return `${key}=${value}`;
    });
    return queryParts.join('&');
};


let userInfo = { name: 'John', age: 30, city: 'New York' };
console.log('Query string:', toQueryString(userInfo));


let areObjectsEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
    
    
  if (keys1.length !== keys2.length) {
    return false;
  }
    

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
}

  return true;
};
