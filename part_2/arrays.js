/*
In JavaScript, length is not a method; 
it's a property of arrays that returns the number of elements in the array. 
Since it's not a method, you don't need to use parentheses () to access it. 
You simply access it directly with dot notation like arr.length.
Using arr.length() would result in an error because length is not a function/method that you can call with parentheses. 
It's a property that holds a numeric value representing the number of elements in the array.
*/
/*
const arr=[1, 2, 3, 4, 5, 6];
console.log(arr.length); //output 6

arr.push(9);
console.log(arr); //output [1, 2, 3, 4, 5, 6, 9]

arr.pop();
console.log(arr); //output [1, 2, 3, 4, 5, 6]

//unshift adds the given value to 0 index of the array and push the remaining value at in dex i to i+1
arr.unshift(10);
console.log(arr); //[10, 1, 2, 3, 4, 5, 6]

//shift operator removes the value at index 0 and make all value at index i to shift to index i-1;
arr.shift();
console.log(arr); //output [1, 2, 3, 4, 5, 6]

console.log(arr.includes(9)); //boolean operation --> it checks if the the given value is bresent in the array or not
//output false

console.log(arr.indexOf(9)); // return the index of given value. -1 if element not found
//ouptut -1

console.log(arr.indexOf(3));//output 2
console.log(typeof arr);//output object

const newArr=arr.join(); //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(typeof newArr); //output string

//slice , splice

console.log("original array", arr); //output original array [1, 2, 3, 4, 5, 6]
//slice(x,y) copies the element of the original array starting at index x and ending at index y-1;
const newarr1=arr.slice(1,3); 
console.log("Slice array",newarr1); //output Slice array [ 2, 3 ]
console.log("original array after slice opeation", arr); // original array after slice opeation [ 1, 2, 3, 4, 5, 6 ]

//splice(x,y) cuts the element of the original array starting at index x and ending at index y;
//splice modifies the original array 
const newarr2=arr.splice(1,3); 
console.log("Splice array", newarr2); // output Splice array [ 2, 3, 4 ]
console.log("original array after splice operation", arr); //output original array after splice operation [ 1, 5, 6 ]
*/

const marvel=["thor", "Ironman", "spiderman"];
const dc=["batman", "superman", "flash"];

marvel.push(dc); //it psuh the entire dc array but as an array stored at a given position
console.log(marvel); //output [ 'thor', 'Ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

//same as above happens with concat as that of push in case of arrays
const marvel1=["thor", "Ironman", "spiderman"];
const dc1=["batman", "superman", "flash"];
// marvel1.concat(dc1);
// console.log(marvel); //output [ 'thor', 'Ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

//to merge two given arrays we can concat them in a new array
const heros=marvel1.concat(dc1);
console.log(heros); //output [ 'thor', 'Ironman', 'spiderman', 'batman', 'superman', 'flash' ]

//we can do the merging by spread operator(...) also
const newheros=[...marvel1, ...dc1]; // spread operator can  be used ot concat more than 2 arrays also
console.log(newheros); //output [ 'thor', 'Ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

//from will convert each and every elements of a given string into the elements of an array
console.log(Array.isArray("Harshit")); //checking if the given string is array or not
//output false

console.log(Array.from("Harshit")); //converting given string into array
//output ['H', 'a', 'r', 's', 'h', 'i', 't']

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3)); //convert the given values in array
// output [ 100, 200, 300 ]