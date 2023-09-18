//scope in javascript

// {} => are known to be scope in js 

let b = 34;  // Global variable
if (true){
    let a = 10;
    const b = 20; //local variable  
    var c = 30 ;
}

// console.log(a)
// console.log(b)
// console.log(c)

//nested scope
function One(){
    const username = "Saurabh";

    function Two(){
        const website = "YouTube"
        console.log(username)
    }
    // console.log(website);
    Two()
}
One()

//+++++++++++++++++++++++++ Intresting +++++++++++

//function1 
// addone(4)
function addone(num){  /// here we can execute function before deceleration
    return num + 1 
}
addone(5)

//function expression
const addTwo = function (num ){  // here we cant execute function before deceleration
    return num + 2 
}

addTwo(5)
