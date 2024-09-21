const user = {
    username: "Aman",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "jonny"
// user.welcomeMessage() 
// console.log(this);

// function one(){
//     let username = "Aman"
//     console.log(this.username);
    
// }
// one()

// const one = function(){
//     let username = "Aman"
//     console.log(this.username);
    
// }

const one = () => {
    let username = "Aman"
    console.log(this.username);
    
}
// one()

// const addTwo = (n1 , n2) => {
//     return n1 + n2
// }

// const addTwo = (n1 , n2) =>  n1 + n2

// const addTwo = (n1 , n2) => (n1 + n2)

const addTwo = (n1 , n2) => ({username: "Aman"})

console.log(addTwo(4,5));


