let args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log("hello and welcome :", args[i]);
}
let o = require("./math");
