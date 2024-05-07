//Dates

let myDate= new Date();
console.log(myDate);
console.log(myDate.toString()); //represents entire current day, date, and time
console.log(myDate.toDateString()); //represent entire current day and date
console.log(myDate.toLocaleString()); //represent date in dd/mm/yyyy and time in hh:mm:ss am/pm format
console.log(myDate.toLocaleDateString()); //represents date in dd/mm/yyyy format
console.log(typeof myDate); //## Date is an object
/* */
 
// ## Note: Months are 0 indexed in Javascript
// Eg: January 0, february 1, ...etc.
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

//Given below date and time in the format of YYYY, MONTH, DATE, HOUR, MINUTE
let mynewDateTime= new Date(2023, 2, 4, 6, 3);
console.log(mynewDateTime.toLocaleString());

//Given below date and time in the format of YYYY, MONTH, DATE, HOUR, MINUTE, SECOND
let mynewDateTime1= new Date(2023, 2, 4, 6, 3, 22);
console.log(mynewDateTime1.toLocaleString());

// when we write date in "MM-DD-YYYY" or "YYY-MM-DD" format then the moth begin from 1 as January and so on..
//Note "DD-MM-YYYY" format is invalid. Only "MM-DD-YYYY" or "YYYY-MM-DD"
let mynewDateTime2= new Date("2023-01-14");
console.log(mynewDateTime2.toLocaleString());

let mynewDateTime3= new Date("10-02-2022");
console.log(mynewDateTime3.toLocaleString());

let mynewDateTime4= new Date("2022-02-22");
console.log(mynewDateTime4.toLocaleString());

//Date.now() gives the current time stamp in miliseconds
//given below time stamp is in miliseconds
let myTimeStamp= Date.now();
console.log(myTimeStamp);
//to convert it into seconds wwe will divide it with 1000 and take the floor value
console.log(Math.floor(Date.now()/1000));
