"use strict";
//npx
// npm version patch  // to change version
// npm publish // to publish
class Bike {
    constructor(_color, _price) {
        this.color = _color;
        this.price = _price;
    }
}
class Engine extends Bike {
    constructor(power, modelYear, color, price) {
        super(color, price);
        this.power = power;
        this.modelYear = modelYear;
    }
}
class DiscountedBike extends Engine {
    constructor() {
        super(...arguments);
        this.discountedPrice = this.price - this.price * (10 / 100);
    }
}
const discountedBike = new DiscountedBike(999, 2023, "white", 499);
console.log("Yamaha bike with ", discountedBike);
console.log("With discount 10%", discountedBike.discountedPrice);
