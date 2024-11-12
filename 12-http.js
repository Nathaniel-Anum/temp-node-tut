const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my Home page.");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is the About Page.");
    return;
  }
  res.end(`
 <h1>Oppps!</h1>
 <p>We can't seem to find the page you are looking for</p>`);
});

server.listen(7000);
