//npx
// npm version patch  // to change version
// npm publish // to publish

class Bike {
    color: string;
    price: number;
    constructor(_color:string,_price:number){
      this.color= _color;
      this.price= _price;
    }
  }
  class Engine extends Bike{
      power:number;
      modelYear:number;
      constructor(power:number,modelYear:number,color:string,price:number)
      {
          
          super(color,price)
          this.power=power;
          this.modelYear=modelYear;
      }
  
  }

  class DiscountedBike extends Engine {
    discountedPrice:number =this.price - this.price* (10/100)
    
    
  }

  const discountedBike= new DiscountedBike (999,2023,"white",499)
  console.log("Yamaha bike with ",discountedBike)
  console.log("With discount 10%",discountedBike.discountedPrice);
  