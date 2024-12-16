const EventEmitter = require("events"); //* creating a class from the events module*//

const customEmitter = new EventEmitter(); //* creating an instance from the class we got in the events module*//

customEmitter.on("response", () => console.log("data received "));

customEmitter.emit("response");



//*Addition information for Event Emitter *//
// const EventEmitter = require("events"); //* creating a class from the events module*//

// const customEmitter = new EventEmitter(); //* creating an instance from the class we got in the events module*//

// customEmitter.on("response", () => console.log(" some other logic here "));
// customEmitter.on("response", (name, id) =>
//   console.log(`Data received by ${name} with id: ${id}`)
// );
// customEmitter.on("response", () => console.log(" basic logic working "));

// customEmitter.emit("response", "John", 34);
