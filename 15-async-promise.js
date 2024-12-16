const { readFile } = require("fs");

const getTxt = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getTxt("./Content/first.txt");
    const second = await getTxt("./Content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
//* Use the above method because it is a more cleaner approach *//

// getTxt("./Content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
