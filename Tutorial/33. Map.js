//Unlike the ForEach it does not change the original array but instead return an new array

let nums=[1,2,3,4,5];

function cubes(elements){
    return Math.pow(elements,2);
}
console.log(nums.map(cubes));
