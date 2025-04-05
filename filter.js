// when we use the for each loop we cannot return any values from that but if we use filter then we can return values of each element of array:

// const myarr = [0,1,2,3,4,5,6]
// const newnums = myarr.filter( (num) => {
 // return num>=0
// })
// console.log(newnums)
// in this way we get all the values of array in a new array but only those values which satisfy a certain condition


// map is used when we need to do some operation and then return the values.
// reduce is something different as we return a single value known as accumulator.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce( (acc, currval) => {
    console.log(`the accumulator value is ${acc} and the current value is ${currval}`);
    return acc + currval
},initialValue)
console.log(sumWithInitial)

const items = [
    {
        itemname: "phone",
        price: 19999
    },
    {
        itemname: "max",
        price: 19999
    },
    {
        itemname: "laptop",
        price: 19999
    },
    {
        itemname: "headphones",
        price: 19999
    }
]



const totalprice = items.reduce( (total,item) => {
    return total + item.price;
},0);
console.log(totalprice);

// here the accumulator is returned and we need to give an inital value to the accumulator after the function declaration.

// we have filter 
//         map
//         and reduce to use as a chain and these all are an edvanced versions of foreach loop
