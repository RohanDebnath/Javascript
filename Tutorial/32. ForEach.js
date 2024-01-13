//It will change the original Array unlike Map
let fruits=["Apple","Banana","Guava"];

fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(elements,index,array){
    array[index]=elements.toUpperCase();
}

function display(elements){
    console.log(elements);
}

let nums=[1,2,3,4,5];
nums.forEach(square);
nums.forEach(display);
function square(elements,index,array) {
    array[index]=Math.pow(elements,2);
}

