const core = require("@actions/core");

const name = core.getInput("name", { required: true });
const sex = core.getInput("sex", { required: false });

console.log("ACTION >>> main.js is called!");
console.log(`name: ${name}`);
console.log(`sex: ${sex}`);

core.setOutput("author", name);
core.setOutput("result", `OK, ${name}!`);