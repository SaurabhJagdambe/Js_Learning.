//Arrays 
//Array are the set of collection of diffrent data types 

const myarr=[1,4,6,7,2]
const myHeros = ["Saurabh","Jagdambe"]

// console.log(myarr[0]);

// myarr.push(6)
// myarr.pop(7)
// console.log(myarr);
// myarr.unshift(9); //it add number at the start
// myarr.shift();  //it removes first element  
// console.log(myarr);
// console.log(myarr.includes(5));
// console.log(myarr.indexOf(7));


//slice , splice 
console.log('Orignal arrey ',myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1)
console.log("Slice ",myarr)

const myn2 = myarr.splice(1,3)

console.log(myn2)
console.log("Splice ",myarr)

const numberOfArreys = [2,4,4,7,[6,8,0],[6,7,[8,5]]]
const newArrey =numberOfArreys.flat(3)//gives multiple areeys into one
console.log(newArrey) 

console.log(Array.from("Saurabh"))

//create a arrey from multiple 

let score1 = 1000
let score2 = 4000
let score3 = 2000

console.log(Array.of(score1,score2,score3));
