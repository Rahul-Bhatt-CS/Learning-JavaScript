
let newdate = new Date()
console.log(newdate.toString());
console.log(newdate.toDateString());
console.log(newdate.toISOString());
console.log(newdate.toJSON());
console.log(newdate.toLocaleDateString());
console.log(newdate.toLocaleString());
console.log(newdate.toLocaleTimeString());
let createdDate = new Date(2025,3,1,24)
console.log(createdDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createdDate.getTime())