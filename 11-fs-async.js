const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./Content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  console.log(first);
  readFile("./Content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    console.log(second);
    writeFile(
      "./Content/results-async.txt",
      `Here is the results: ${first}, ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
