const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);



const coll = [1, 2, 3, 4, 5];
const result = coll.reduce((total, num) => total * num, 1);
console.log(result);



const strings = ["a", "b", "c", "d"];
const combined = strings.reduce((result, str) => result + str, "");
console.log(combined);



const arr = [1, 2, 3, 4, 5, 6];
const grouped = arr.reduce((groups, num) => {
  if (num % 2 === 0) {
    groups.even.push(num);
  } else {
    groups.odd.push(num);
  }
  return groups;
}, {even: [], odd: []});
console.log(grouped); 



const numsArr = [1, 2, 2, 3, 4, 4, 5];
const unique = numsArr.reduce((result, num) => {
  if (!result.includes(num)) {
    result.push(num);
  }
  return result;
}, []);
console.log(unique);



const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((result, arr) => {
  return result.concat(arr);
}, []);
console.log(flattened);