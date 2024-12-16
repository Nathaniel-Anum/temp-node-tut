//* STREAMS*//
//* Writeable - Used to write data sequentially*//
//* Readable- Used to read data sequentially*//
//* Duplex - Used to both read and write data sequentially*//
//* Transform - Data can be modified whiles writing or reading*//

const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./Content/bid.txt", `hello world ${i}\n`, { flag: "a" });
}
