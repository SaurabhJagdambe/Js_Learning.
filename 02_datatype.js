
// alert(3+3)    //this line will not run cause we are using node as compiler not browser.

//primitive datatype    // are call by value 
// js has datatypes like
// 1.number(2,45) 
// 2.bigint(12323...)
// 3.string("") 
// 4.boolean(true/fals)
// 5.null(standalone value)
// 6.undefined()
// 7.symbol(unique)

// javascript is interpreted Language not compiled, js not need to compile before run code.
// javascript is Dynamically Typed which means that data types of variables are determined by the value .

// non Primitive   // call bt refrence
//1.objects 
//2.arrey
//3.function


//object is also datatype   and  null is type of object.

       //   .... conversion in datatype .....

// let score = "33abc"

// console.log(typeof score)
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  //gives NaN 

//1 => boolen true ; 0=> false 
//"" => false  ;  "saurabh" => true


//***************** OPRATIONS  ************* */

// let value = 3
// let negValue = -value 
// console.log(negValue)

// console.log("1" + 2); //=> 12
// console.log(1 + "2");  //=> 12
// console.log("1" + "2"); //=> 12
// console.log("1" + 2 + 2); //=> 122
// console.log(1 + 2 + "2"); //=> 32 


//console.log(+true) //=> 1
//console.log(+"") //=> 0

// let counter = 100 ;
//  ++counter;
// //  counter++;
//  console.log(counter)  // both gives 101



 // Strict Check in Js  (===)
  // '===' checks datatype and value both 
  // '==' only checks value  

 //console.log("2" == 2) //=> true
 // console.log("2" === 2) // => false


// when we use type of 
/*         
Type of value                 Result
Undefined                       "undefined"
Boolean                         "object"
Number                          "number"
String                          "string"

*/

//********************* Memory and Heap **********/

// stack (primitive)   , Heap (Non-Primitive)

//stack memory gives copy of value 
//heap gives refrence of value