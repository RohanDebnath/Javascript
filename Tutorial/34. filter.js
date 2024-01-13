//  .filter()-> it creates a new array by filtering the elements

let numbers=[1,2,3,4,5,6];

console.log(numbers.filter(isEven));

function isEven(elements){
    return elements%2==0;
}