// const tinderUser = new objects()
const tinderUser = {}

tinderUser.id = "1,2,3abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname:{
        userfullname:{
            firstname: "suraj",
            lastname: "tomar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"}


// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users =[
    {
        id: 1,
        email:"pacer@gmail.com"
    },
    {
        id: 1,
        email:"pacer@gmail.com"
    },
    {
        id: 1,
        email:"pacer@gmail.com"
    },
]

// users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//   console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ****** objects destructuring and JSON API *******
const course = {
    coursename: "js in hindi ",
    price: "999",
    courseInstructor: "suraj"
}

// course.courseInstructor
// console.log(course);

const { courseInstructor: instructor} = course;
// console.log((courseInstructor));

console.log(instructor);
