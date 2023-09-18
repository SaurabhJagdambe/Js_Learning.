
const userEmail = ""

if (userEmail){
    console.log("Got It ")
}
else{
    console.log("Didnt Got it ")
}

//here if UserEmail has some string or Empty arrey [] then it fives true value 
//and for Empty string ("") it gives false value.

//Falsy values are 
// false, 0 ,-0, BigInt 0n , "" ,null , undefined , NaN 

//Truthy values
// "0", "false", " " ,[], {}, function(){}


// Nulish Coalescing Oprator (??): null undefined

// let val1;
// // val1 = 5 ?? 10 
// val2 = null ?? 10 
// val3 = undefined ?? 15 
// console.log(val2)
// console.log(val3)


// Ternery Oprator
// condition ? true : false 

const teaPrice = 10 ;
teaPrice >= 6 ? console.log("less than 10") : console.log("more than 10")