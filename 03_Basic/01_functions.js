
//function create
// function sayMyname(){
//     console.log("Saaurabh")
//     console.log("Jagdambe")
// }

// sayMyname  //refrence
// sayMyname()  //execution

// function addition(n1,n2){   //n1,n2 are thr Parameters 
//    console.log( n1 + n2)

// }
// addition() //=> NaN
// addition(1,6) //=>7  //1,6 are thr Arguments

//function using return method 1
// function miltiplication(n1,n2){   //n1,n2 are thr Parameters 
//     let result = n1 *  n2 
//     return result              // after return code will not execute 
//     console.log( n1 + n2)

//  }
//  const result = miltiplication(2,3)  //here both results re diffrent.
//  console.log("Result :", result)


 //function using return method 2
// function addition2(n1,n2){   //n1,n2 are thr Parameters 
//     return n1 +  n2            // after return code will not execute 
//     console.log( n1 + n2)

//  }
//  const result2 = miltiplication(7,3)
//  console.log("Result :", result2)


// 
// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("Plesr Enter a userName")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("saurabh"))
// console.log(loginUserMessage())


//rest oprator 
function cartPrice(...num1){   //rest oprator
  
    return num1
}

console.log(cartPrice(200,300,740,55))
