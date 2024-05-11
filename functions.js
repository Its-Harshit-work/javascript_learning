function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName();

function add(a,b){
    console.log(a+b);
}
add(3, "a");

function loginUserMessage(username){
    if(username==undefined){
        console.log("Please enter user name");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Harshit")); // Output  Harshit just logged in
console.log(loginUserMessage()); //Output Please enter user name


///Scopes in javascript

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Harshit"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Harshit"
    if (username === "Harshit") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
