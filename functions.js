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
console.log(loginUserMessage());
