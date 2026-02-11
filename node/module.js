const fs = require("fs");

// Write to a file
 const write=fs.writeFileSync("example.txt", "Hello, Node.js!");

// Read from a file
const data = fs.readFileSync("example.txt" ,"utf8");
console.log(data);

// Append to a file
 const final =fs.appendFileSync("example.txt", "\n This is appended text.");
console.log(fs.readFileSync("example.txt","utf8" ));
console.log(fs.readFileSync("example.txt", "utf8"));

// ===============================

// const url = require("url");

// const myUrl = "https://example.com/path?name=John&age=25";

// // Parse URL
// const parsed = url.parse(myUrl, true);

// console.log(parsed.host); // example.com
// console.log(parsed.pathname); // /path

// console.log(parsed.query.name)
// console.table([parsed.query.name, parsed.query.age]); // John
// console.table({ name: parsed.query.name, age: parsed.query.age });

// ===============================

// const os = require("os");

// if (os.freemem() / os.totalmem() < 0.1) {
//   console.warn("⚠ Low memory! Take action.");
// }

// if (os.platform() === "win32") {
//   console.log("Running on Windows-specific setup");
// }

// console.log("OS Type:", os.type());
// console.log("Platform:", os.platform());
// console.log("Free Memory:", os.freemem());
// console.log("Free Memory (GB):", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");

// console.log("Total Memory:", os.totalmem());
// console.log("CPU Info:", os.cpus());

// // ===============================
// Listen to events (emitter.on),// Trigger events (emitter.emit) use hota h


// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // Event listener
// emitter.on("greet", (name) => {
//   console.log(`Hello, ${name}!`);
// });

// // Emit event
// emitter.emit("greet", "Shubham");

// // ===============================

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, this is my Node.js server! shubham is created this");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// // ==============================

// const fs = require("fs");

// // Create a readable stream from a file
// const readableStream = fs.createReadStream("input.txt", "utf8");

// // Create a writable stream to another file
// const writableStream = fs.createWriteStream("output.txt");

// // Pipe the data from read to write
// readableStream.pipe(writableStream);

// console.log("Data is being copied from input.txt to output.txt using streams.");

// // // ============================

const fs = require("fs");

const readStream = fs.createReadStream("bigfile.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

readStream.on("error", (err) => {
  console.error("File read error+++++++:", err.message);
});

