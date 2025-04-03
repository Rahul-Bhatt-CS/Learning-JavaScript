// Singleton is created as:
// Object.create

// object literal are:

// using symbols in object declaration
// const mysym = Symbol("key")

// const obj = {
//     name : "Rahul",
//     [mysym]: "key 1",
//     age : 19,
//     location : "Haldwani",
//     email : "rahul@google.com",
//     isLoggedin:false
// }

// console.log(obj[mysym])

// console.log(obj.email)
// // When we give '.' we not need to give the particular syntax. but when we use the array form we need to specify that the feild is a string.
// console.log(obj["email"])


// nested objects:

const user = {
    userName:{
        firstName:"Rahul",
        lastName:"bhatt" 
    },
    email:"rahul@google.com"
}

// ? is used when we are not sure if this exists or not.
console.log(user.userName?.firstName)