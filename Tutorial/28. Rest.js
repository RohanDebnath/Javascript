// rest Parameters = (...rest) allow a function work with a variable number 
//                  of arguments by bundeling them into an array 

//                  spread= expands an array into seperate elements
//                  rest= bundles seperate elements into an array

function openFridge(...foods){
    console.log(foods)
}

const food1="Pizza";
const food2="Burger";
const food3="Ice Cream";

openFridge(food1,food2,food3);

function getFood(...foods){
    return foods;
}
const foods=getFood(food1,food2,food3);
console.log(foods);

function sum(...numbers){
    let count=0;
    for(let num of numbers){
        count+=num;
    }
    return count;
}

function avg(...numbers){
    let count=0;
    for(let num of numbers){
        count+=num;
    }
    return count/numbers.length;
}

console.log(sum(1,2,3,4));
console.log(avg(1,2,3));