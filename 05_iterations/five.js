// const coding = ["js", "cpp", "java","ruby", "python"]

// coding.forEach( function (val) {
//     console.log(val);
    
// })

// coding.forEach( (num)=>{
//     console.log(num);
    
// } )

// function printMe(val){
//     console.log(val);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// });

const myCoding = [
    {
    languageName: "c++",
    languageFileName: "cpp"
},
    {
    languageName: "javaScript",
    languageFileName: "js"
},
    {
    languageName: "pyhton",
    languageFileName: "py"
}

]
myCoding.forEach( (val)=>{
    console.log(val.languageName);
    
} )