//Modules

const sayHi = (name) => {
  console.log(`hello ${name} you are welcome to my channel!`);
};

sayHi("Brookes");

//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
// console.log(sayHi);
// console.log(names);

const data = require("./6-alternative-export");
require("./7-mind-grenade");

sayHi("Brookes");
sayHi(names?.john);
sayHi(names?.peter);
