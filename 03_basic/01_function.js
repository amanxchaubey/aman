function sayMyname(){
console.log("A");
console.log("M");
console.log("A");
console.log("N");
}
// sayMyname()

// function addTwoNumbers(n1, n2){
//     console.log(n1+n2);
    
// }
function addTwoNumbers(n1, n2){
    // let result = n1 + n2
    // return result

    return n1 + n2
    
}
const result = addTwoNumbers(3,5)
// console.log(result);

function loginUserMessage(username){
    if(/*username === undefined or */ !undefined){
        console.log("please eneter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Aman"))
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));
const user = {
    username : "aman",
    price : 399
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)
const myNewArray = [100,200,300,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


