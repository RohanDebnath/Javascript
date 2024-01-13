// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  in to separate elements
//                                  (unpacks the elements)

let numbers=[1,2,3,4,5];
let max=Math.max(numbers);
console.log(max);
max=Math.max(...numbers);
console.log(max);
let min=Math.min(numbers);
console.log(min);
min=Math.min(...numbers);
console.log(min);

let username = "Rohan Debnath";
console.log(username);
let letters = [username]; 
console.log(letters);
letters = [...username]; 
console.log(letters);

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);