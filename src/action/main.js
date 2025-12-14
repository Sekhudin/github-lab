const core = require("@action/core");

const name = core.name;
const sex = core.sex;

console.log("ACTION >>> main.js is called!")
console.log(`name: ${name}`);
console.log(`sex: ${sex}`);

core.setOutput("author", name);
core.setOutput("result", `OK, ${name}!`);