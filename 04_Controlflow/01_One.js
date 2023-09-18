  
  //if
//   if (2=="2"){
//     console.log("executed");
//   }


//if else
  const score = 300 ;

  if (score < 100) {
    const power = "fly"
    console.log(`User Power: ${power}`)
  }
  else if (score > 300){
    console.log(`else if part `);
  }
  else{
    console.log(`else part`);
  }


const loggedinGoogle = true;
const loggedinEmail = true;

if (loggedinGoogle || loggedinEmail){
    console.log("User Logged in");
}
