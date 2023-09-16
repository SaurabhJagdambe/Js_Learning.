//objects are of two types 
//1.Singletone
//2.using dot oprator 

const mySum="1"
const jsUser={
    name:"Saurabh",
    email:"Saurav@gmail.com",
    age:22,
    [mySum]:"Symbol"
}

//decleration of object 
jsUser.email
// console.log(jsUser.email)

//symbol is written in []

Object.freeze(jsUser); // freezes the object and cant update the value.

//we can create object in object

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj4= Object.assign({},obj1,obj2)  //combine two objects using assign method.
const obj3 = { obj1,obj2}      //simple 
const obj31={...obj1,...obj2}  //using Spread oprator(...).

// console.log(obj3);
// console.log(obj4);
// console.log(obj31);
 
//get a values from objects 

// console.log(Object.keys(jsUser))
// console.log(Object.values(jsUser))
// console.log(Object.entries(jsUser))


// Destructuring of objects 

const course = {
    courseName:"Js in Hindi",
    price:"999",
    courselanguage:"Javascript"
}

console.log(course.courselanguage)

const {courselanguage} = course   //destructuring with curly bracket impletation.
console.log(courselanguage);

//Api & JSON 
//in json key and value pairs are in string

// {
//     "courseName":"Js in Hindi",
//     "price":"999",
//     "courselanguage":"Javascript"

// }



