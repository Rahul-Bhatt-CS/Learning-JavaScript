const parent = document.querySelector('.parent')

// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0].innerHTML)
const daysarr = Array.from(parent.children);
for(i = 0;i<daysarr.length;i++){
    console.log(daysarr[i].innerHTML)
}

// we can also use parent.firstElementChild and parent.lastElementChild


// to get a parent from a child element:

// const dayOne = document.querySelector('.day')
// console.log(dayOne)
// console.log(dayOne.nextElementSibling)
// console.log(dayOne.parentElement)

console.log(parent.childNodes)