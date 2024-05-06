/*
const score=400;

const balance=new Number(100);
console.log(balance);
console.log(score);

console.log(balance.toString().length);
//toFixed fixes the number of decimal digits
console.log(balance.toFixed(10));


const otherNumber=23.8966
//toPrecision round off the value to the given number of digits from starting

console.log(otherNumber.toPrecision(4));
const otherNum=123.6969
console.log(otherNum.toPrecision(2));   //23.90
console.log(otherNum.toPrecision(3));   //1.2e+2
console.log(otherNum.toPrecision(4));   //124
console.log(otherNum.toPrecision(5));   //123.70


//toLocaleString puts commas in the numbers according to international number system
//toLocaleString('en-IN') is used to put commas in the given number according to indian number system
const hundred=10000000;
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));
*/
/*
//Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.1));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

*/
// Math.random gives random value between 0 and 1
console.log(Math.random());
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10 +1));

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1)));