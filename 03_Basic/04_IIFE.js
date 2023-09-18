
// Immediatly Invoked Function Expressions (IIFE)

(function chai (){            //This is IIFE Syntax 
    console.log("Saurabh")  //Named IIFE
})();

// iife is used to reduced the global scope pollution

((name)=>{
    console.log(`${name} is here`)
})("saurabh")

//when we are writing two IIFE then after first we have to give ';' expression