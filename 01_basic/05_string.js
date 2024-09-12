const name = "aman"
const repoCount = 50

// console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aman-og-boss')
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
// console.log(anotherString);

const  newStringOne = "   aman   "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://aman.com/aman%20chaubey"

console.log(url.replace('%20', '_'));

console.log(url.includes('aman'));

console.log(url.includes('boss'));

console.log(gameName.split('-'));










