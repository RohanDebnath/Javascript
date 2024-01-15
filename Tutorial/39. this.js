//It refers to the current object

const person1={
    name:"Rohan",
    favFood:"Ice cream",
    eat: function(){console.log(`Hi I am ${this.name} and I am eating ${person1.favFood}`)}
}

person1.eat();