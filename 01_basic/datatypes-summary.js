 //Primitive

 // 7 types: String, Number, Boolen, null, undefined, Symbol, Bigint

 const  score = 100
 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;
 
 const id = symbol('123')
 const anotherId = symbol('123')

 console.log(id == anotherId);

 const bigNumber = 223333333333334n 
 
 //Reference (non primitive)

 //Array, Object, Function

 const heros = ["ironman", "thor", "loki"];
 let myobj = {
    name: "aman",
    age: 20, 
 }

 const myFunction = function(){
    console.log("hello world");
    
 }
 console.log(myFunction);
 