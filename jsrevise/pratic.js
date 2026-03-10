const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

  fs.readFile("index.html", (error,data) => {

    if (error) {
      res.write("Error while reading file");
      res.end();
    } else {
      res.write(data);
      res.end();
    }

  });

});

const port = 3000;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});