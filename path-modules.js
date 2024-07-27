// const os = require("os");

// // info about the current user
// const user = os.userInfo();
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/content", "sub", "text.txt");

// const base = path.basename(filePath); // last path in the long path
// console.log(base);

const absolute = path.resolve(__dirname, "content", "sub", "text.txt");
console.log(absolute);
