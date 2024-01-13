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