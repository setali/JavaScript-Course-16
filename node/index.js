console.clear();
import myMul, { sum as mySum, sub } from "./math.js";
// import { sum as mySum, sub } from "./math.js";
// const { sum: mySum, sub } = require("./math");
import isOdd from "is-odd";
import _ from "lodash";

console.log(myMul(2, 3));
console.log(isOdd(9));
console.log(isOdd(10));
console.log(_.random(0, 10));
console.log(mySum(2, 3));

// console.log(sum(2, 6));
// console.log(sub(10, 3));

// console.log(__dirname);
// console.log(__filename);

// const fs = require("fs");
// const path = require("path");

// const p = path.resolve("..", "todo");

// console.log(p);

// const dir = fs.readdirSync(p);

// console.log(dir);

// const os = require("os");

// const cpu = os.cpus();

// console.log(cpu.length);

// console.log(global);
