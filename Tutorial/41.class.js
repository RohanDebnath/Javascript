class Product1{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log(this.name);
        console.log(this.price);
    }
    calculateTax(salestax){
        return this.price+(this.price*salestax);
    }
}

const product=new Product1("Ghee",100);
product.display();

const totalCost=product.calculateTax(0.05);
console.log(totalCost);