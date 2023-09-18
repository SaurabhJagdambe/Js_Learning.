//for Each

const programming = ["js","c++","Python","java","ruby"]

// programming.forEach(function(item){
//     console.log(item)
// })

// programming.forEach((a)=>{
//     console.log(a)
// })

function printMe(item,index,arr){
    console.log(item,index,arr)
}
// programming.forEach(printMe)  //refer only no ()


const myCoding =[
    {
        languageName : "javascript",
        languageFile : "js",
    },
    {
        languageName : "java",
        languageFile : "java",
    },
    {
        languageName : "Python",
        languageFile : "py",
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})