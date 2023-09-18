// const programming = ["js","c++","Python","java","ruby"]

// const value = programming.forEach((item)=>{

//     return item 
// })
// console.log(value)   // forEach cant return value 


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num)=>num >4 )
// console.log(newNums)  //no need of return as no curly brces 

// const newNums= myNums.filter((num)=>{
//    return  num >4 }
// )
// console.log(newNums)  //it required return 



// Map Method 
const myNum1 = [1,2,3,4,5,6,7,8,9,10];

// const num1= myNums1.map((num)=>num+10)
// console.log(num1)
//chaining 

const chainning = myNum1.map((num)=> num * 10)
                        .map((num)=> num +1)
                        .filter((num)=> num >= 40)
// console.log(chainning);


//Reduced Method 
 const nubers =[1,2,3,4,5]

//  const num2 = nubers.reduce(function(acc,currval){
//     console.log(`acc: ${acc}and currval ${currval} `)
//     return acc + currval
//  },0)
//  console.log(num2)

//short 
 const num2 = nubers.reduce((acc,currval)=>acc + currval,0)
 console.log(num2)