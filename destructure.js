const course = {
    coursename: "JAVA",
    price:8500,
    courseinstructor:"Rahul Bhatt"
}

// if we want to use a single property many times we can use it directly as:

const {coursename : name} = course
// destructure ka matlab hai ki baar baar nhi likhna padega bs ek baar alag sa naam dedo usi naam se bulayenge ab
// jaise ab mujhe yahan baar baar course.coursename ki jagah sirf name likhna hai aur puri value mil jayegi.
console.log(name)