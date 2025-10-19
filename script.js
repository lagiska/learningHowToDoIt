//easy


const greet = (name) => `Привет, ${name}!`;


const sum = (a, b) => a + b;


const isEven = (num) => num % 2 === 0;


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const formatName = (firstName, lastName) => `${lastName}, ${firstName}`;


const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
      }
  }
  return -1;
};

//medium


const findInArray = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
      }
  }
  return false;
};


const calculateTotal = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
};


const findLongestWord = (words) => {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
};


const sumAll = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};


const validatePassword = (password) => {
  const isLongEnough = password.length > 6;
  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      hasDigit = true;
      break;
    }
  }

return isLongEnough && hasDigit;
};


const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

return reversed;
};


const getUniqueValues = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

return unique;
};


const arrayToObject = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    result[key] = value;
  }

return result;
};


const filterUsers = (users, filters) => {
  return users.filter(user => {
    for (const key in filters) {
      if (user[key] !== filters[key]) {
        return false;
      }
    }
  return true;
  });
};


const arrayDiff = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  
return result;
};