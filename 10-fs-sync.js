//Syncrhonously (Blocking)

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Content/first.txt", "utf-8");
const second = readFileSync("./Content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "./Content/result-sync.txt",
  `Here is the results: ${first}, ${second}`,
  { flag: "a" }
);
