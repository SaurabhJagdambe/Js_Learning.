// this reffers to the current Context 

// console.log(this)  // refres to empty object 
const user = { 
    username : " Saurabh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}
user.welcomeMessage()

//1 normal function 
// function Chai(){
//     console.log(this.username);
// }
// Chai()

//2 function expression
// const chai = function(){
//     let username = "saurabh"
//     console.log(this.username);
// }
// chai()

//3 Arrow function
const chai = () => {
    let username = "saurabh"
    console.log(this.username);
}
// chai()


//3.1 
// const addTwo = (num1 , num2 ) =>{
//     return num1 + num2;
// }

// console.log(addTwo(3,4))

//3.3 Implicit Return
const addTwo1 = (num1 , num2 ) =>  num1 + num2 ;
console.log(addTwo1(3,4))   // no need to write return  if we use curly bracket then we can write return .
 // explicit means we have to write return key 

//
const addTwo2 = (num1 , num2 ) => (num1 + num2) 
