// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "aman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "aman@gmail.com",
    fullname: {
        userfullname: {
           firstname: "Aman",
           lastname: "chaubey"
        }  
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "not@gmail.com"
    },
    {
        id: 1,
        email: "not@gmail.com"
    },
    {
        id: 1,
        email: "not@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "jss in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "hitesh" ,
//     "coursename": "js in hindi",
//     "price": "free"
// }

    
