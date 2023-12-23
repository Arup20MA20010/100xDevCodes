"use strict";
import { readFile } from "fs";
import { join } from "path";
import { cwd } from "process";
const BaseDir = cwd();
// console.log(BaseDir);
// console.log(join(BaseDir, "easy/somuch.txt"));
const filePath = join(BaseDir, "easy/readFile.txt");
readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(`Error ${err}`);
  }
  setTimeout(() => {
    console.log("Before Read", 1000);
  }, 1000);
  console.log(data);
  setTimeout(() => {
    console.log("After Read", 1000);
  }, 1000);
});
setTimeout(() => {
  console.log("Hello");
}, 1000);
