"use strict"

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
}
  
let animal = new Animal("My animal");

//Inheritance and overriding
class Rabbit extends Animal{
    constructor(name,earLength) {
      super(name);
      this.earLength = earLength;
    }
    hide() {
      alert(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
      }
  }

let rabbit = new Rabbit("My rabbit",10);
rabbit.run(5);

/*
--- Static method ---
*/
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
    //Factory
    static createTodays() {
        // remember, this = Article
        return new this("Today's digest", new Date());
      }
}

// usage
let articles = [
new Article("HTML", new Date(2019, 1, 1)),
new Article("CSS", new Date(2019, 0, 1)),
new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

let article = Article.createTodays();

/*
--- private and protected ---
*/
class CoffeeMachine {
    _waterAmount = 0;

    //Protected
    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }
    
    get waterAmount() {
    return this._waterAmount;
    }
  
    constructor(power) {
      this.power = power;
    }
    //Read-only
    get power() {
        return this._power;
      }
    
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 200;