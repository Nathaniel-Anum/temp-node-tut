const { createReadStream } = require("fs");

const stream = createReadStream("./Content/bid.txt", { encoding: "utf-8" });

stream.on("data", (results) => console.log(results));
stream.on("error", (error) => console.log(error));
