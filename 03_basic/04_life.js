//Immediately Invoked Function expression(IIFE)
(function one(){
    console.log(`DB CONNECTED`);
})
();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})
("Aman")