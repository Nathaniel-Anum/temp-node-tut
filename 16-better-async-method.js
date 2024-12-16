
//* Use this method because it is a more cleaner approach and more readable *//
const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./Content/first.txt", "utf-8");
    const second = await readFilePromise("./Content/second.txt", "utf-8");
    await writeFilePromise(
      "./Content/result-mind-grenade.txt",
      `THIS IS AWESOME ; ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();




//* Second Approach *//
// const { readFile, writeFile } = require("fs").promise;
// const util = require("util");

// const readFile = util.promisify(readFile);
// const WriteFile = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFile("./Content/first.txt", "utf-8");
//     const second = await readFile("./Content/second.txt", "utf-8");
//     await writeFile(
//       "./Content/result-mind-grenade.txt",
//       `THIS IS AWESOME ; ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();



