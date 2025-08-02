const firstStr = 'JavaScript is AWESOME';
console.log(firstStr.toUpperCase());

const secondStr = '2024-07-30';
const year = secondStr.slice(0, 4);
const month = secondStr.slice(5, 7);
const day = secondStr.slice(8, 11);
console.log (`Год: "${year}"/ Месяц: "${month}" / День: "${day}"`);

const thirdStr = 'Я люблю JavaScript! Я люблю это дело';
console.log(`${thirdStr.slice(0, 7)} программирование! Я обожаю ${thirdStr.slice(-9)}`);

const fourthStr = 'яблоки,груши,виноград';
const tempStr = fourthStr.toUpperCase();
console.log(`${tempStr.slice(0, 6)} | ${tempStr.slice(7, 12)} | ${tempStr.slice(-8)}`);

const fifthStr = 'example@mail.com';
console.log(fifthStr.includes('@'));
console.log(fifthStr.endsWith('.com'));

const sixthStr = '1234567812345678';
const tempStr1 = sixthStr.slice(0, 8);
const tempStr2 = sixthStr.slice(-8);
console.log (`${tempStr1.replace('5678', ' ****')} ${tempStr2.replace('1234', '**** ')}`);

const seventhStr = 'one string to analyze';
const seventhStrLen = seventhStr.length;
const firstChar = seventhStr[0];
const lastChar = seventhStr.at(-1);
const midChar = seventhStr.charAt(seventhStrLen/2 - 1);
console.log(seventhStrLen, firstChar, lastChar, midChar);