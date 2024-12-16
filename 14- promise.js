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

getTxt("./Content/first.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
