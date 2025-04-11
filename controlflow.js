// if(condition){
    // some code to run
// }
// now if we use == then it just checks the value not the data type
// if(2 == '2'){
//     console.log('executed');
    // here this code will get executed but but but
// }
// if(2 === '2'){
//     console.log('executed 2');
    // sorry to say but this will not get executed as this time along with the value the daata types are also checked if they are same or not.
// }

// falsy values:
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// 'false', "0", " ", [], {}, function(){}


// let arr = [];
// // now in order to check if the array is empty we need to check its length as follows:
// if(arr.length === 0){
//     return false;
// }

// // to check for an object:

// let obj = {}

// if(Object.keys(obj).length === 0){
//     // frist we get the array of keys of the object that needs to be checked then we find its length like we did before to check the length.
// }


// nullish Coalescing Operator (??)
let val1;
// val1 = 5??10;
val1 = null??10;
// this will  assign val1 with null until and unless we get some value after the ?? operator here it will always get the value 10 but when we need to fetch
// something from the database maybe we get the value an unwanted value so instead of disrupting the code the variable will be assigned with the value null.
console.log(val1);



