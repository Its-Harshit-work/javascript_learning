/*

//object literals

const mySym=Symbol("key1"); //declaring a symbol

const jsUser={
    name : "Harshit",
    "full name": "Harshit Rai",
    age : 18,
    [mySym] : "hello",
    location : "Delhi",
    isLoggedin : false,
    lastLoginDays : ["Monday", "Tuesday"],
    email : "harshit@gmail.com"
}
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);
jsUser.email="hello@gmail.com";
//Object.freeze(jsUser) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

jsUser.greeting = function(){
    console.log("Helllo in Javascript")
}

console.log(jsUser.greeting()); //output Helllo in Javascript
console.log(jsUser.greeting); //output [Function (anonymous)]

jsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting()); // output Helllo in Javascript
console.log(jsUser.greeting2()); //output Hello JS user, Harshit


//singleton

const tinderUser = new Object();// singleton empty object
const tinderUser1= {}; // non singleton empty object

tinderUser.id= "123abc";
tinderUser.name= "Sam"

console.log(tinderUser); // output { id: '123abc', name: 'Sam' }

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Harshit",
            lastname: "Ji"
        }
    }
}
console.log(regularUser); //output { email: 'someone@gmail.com', fullname: { userfullname: { firstname: 'Harshit', lastname: 'Ji' } }  }
console.log(regularUser.fullname); // output { userfullname: { firstname: 'Harshit', lastname: 'Ji' } }
console.log(regularUser.email); // output someone@gmail.com
console.log(regularUser.firstname); // output indefined
console.log(regularUser.fullname.userfullname); //output { firstname: 'Harshit', lastname: 'Ji' }
console.log(regularUser.fullname.userfullname.firstname); //output Harshit

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj5 = {5: "c", 6: "d"};
const obj3={obj1, obj2}; //output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3); 

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj6 = Object.assign({}, obj1, obj2, obj5);
console.log(obj6); // output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

//spread operator
console.log({...obj1, ...obj2}); //output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log({...obj1, ...obj2, ...obj3}); //output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }}

const users=[
    {
        id: 1,
        email: "good@gmail.com"
    },
    {
        id: 1,
        email: "good@gmail.com"
    }
]
*/


//Destructing of objects

const course = {
    coursename: "Hello World",
    price: "999",
    courseInstructor: "Harshit"
}

console.log(course.courseInstructor);

const {courseInstructor: Instructor}= course;
console.log(Instructor);