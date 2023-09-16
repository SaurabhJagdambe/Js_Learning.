const name =" saurabh"
const age = 22 ;

//string interpoltion
console.log(`My name is ${name} and i am ${age} year old`);


const gameName = new String('Saurabh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.endsWith('h'));
console.log(gameName.replace('h','v'));

const newName = gameName.slice(-7,2)
console.log(newName)
const gameName1 ="      jagdambe    "
// const newName1 = gameName1.trim()
// console.log(newName1)
const newName1 = gameName1.split('a')
console.log(newName1)

