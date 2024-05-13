// //this keyword is used for refering to the current context
// const user = {
//     username : "Harshit",
//     price  :999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }

// user.welcomeMessage();  // output Harshit, welcome to website
// user.username="jack";
// user.welcomeMessage(); //output jack, welcome to website

// console.log(this); // output {}



const user = {
    username : "Harshit",
    price  :999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();  
/*output---
Harshit, welcome to website
{
  username: 'Harshit',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username="jack";
user.welcomeMessage(); 
/*output 
jack, welcome to website
{
  username: 'jack',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this); // output {}

/*
const fun= function(){
    let unsername= "Harshit"
    console.log(this.username);
}
*/
const fun = () =>{
    let use = "Harshit"
    console.log(this)
}

fun() // output {}

//explicit return -- uses return keyword
const addTwo=(num1, num2) =>{
    return num1+num2;
}
console.log(addTwo(2, 4)); //output 6

//implicit function -- do not use return keyword. used when there is only one statement to be executed

const diffTwo = (num1, num2) => (num1-num2);
console.log(diffTwo(7,2)); //output 5
