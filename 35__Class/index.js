// class = (ES^ feature) provides a more structured and cleaner way to 
//          work with objects compared to traditional constructor functions;
//ex: static keyword, encapsulation, inheritence

class product{   //class--overall blueprint, product--object

    constructor(name,price){   //constructor--object's initial data---> onlt one constructor per class
        this.name = name;
        this.price = price;
    }

    displayProduct(){        //inside class --> there is no need to use 'function' keyword
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){   
        return this.price + (this.price*salesTax)
    }
}
const salesTax = 0.05;

const product1 = new product("Vivo t3x 5G", 12666);
const product2 = new product("Vivo t3x 5G backcover", 150);

product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`total price(with tax) of ${product1.name}: ${total1.toFixed(2)}`);
const total2 = product2.calculateTotal(salesTax);
console.log(`total price(with tax) of ${product2.name}: ${total2.toFixed(2)}`);

//we can think why class when constructor is there and we can also create function in constructor too
//but if you create 100 product objects using only constructor --> this approach creates 1000 separate displayProduct() function objects --> so we need class