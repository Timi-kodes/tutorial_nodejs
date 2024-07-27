const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to my server!");
  }
  if (req.url === "/about") {
    res.end("Here is the about page");
  }
  res.end(`
    <h1> OOps!</h1>
    <p> We can seem to find the page that you are looking for</p>
    <a href="/"> Back to the homepage</a>`);
});

server.listen(5000);
