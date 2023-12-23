"use strict";
const path = require("path");
// console.log(__dirname);
// const filePath = path.join(__dirname, "readFile.txt");
// console.log(filePath);
const fs = require("fs");
const getFullPath = (fileName) => path.join(__dirname, fileName);

function readMyFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(getFullPath(fileName), "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
}
async function writeMyFile(fileName, msg) {
  let data = await readMyFile(fileName);
  data = `${data} @Overwritten by ${msg} `;
  fs.writeFile(getFullPath(fileName), data, (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("File written");
    }
  });
  data = await readMyFile(fileName);
  //   console.log(data);
}
writeMyFile("somuch.txt", "some words are should be never spoken");
