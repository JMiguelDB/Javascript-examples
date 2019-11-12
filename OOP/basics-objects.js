"use strict"

//Creating objects
let user = new Object();
user = {};
user = {
    name: "John",
    age:30
};

let fruit = "apple";
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
    };
}

//Adding new property
user.isAdmin = true;
user["likes birds"] = true;

//Deleting existing property
delete user.age; 
delete user["likes birds"];

//Checking if a property exists.
user = { name: "John", age: 30 };

console.log(user.noSuchProperty === undefined); // true means "no such property"
console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist

//Loops
for (let key in user) {
    console.log( key );  // name, age
    console.log( user[key] ); // John, 30
}

/*
--- Clone objects ---
*/
let clone = {}; // the new empty object
for (let key in user) {
  clone[key] = user[key];
}

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user, permissions1, permissions2); // copies all properties from permissions1 and permissions2 into user

clone = Object.assign({}, user); //Simple cloning

/*
--- Object methods ---
*/
user.sayHi = function() {
    console.log("Hello!");
};
user.sayHi(); // Hello!

user = {
    sayHi() { // same as "sayHi: function()"
      alert("Hello");
    }
};

/*
--- this in methods ---
*/
user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
};

let user = { name: "John" };
let admin = { name: "Admin" };

//The value of this is defined at run-time.
function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

/*
--- ToString && ValueOf method conversions ---
*/
let user = {
    name: "John",
    money: 500,
    toString() {
      return this.name;
    },
    ValueOf(){
        return this.money;
    }
  };
  
  alert(user); // toString -> John

/*
--- Constructor ---
*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");