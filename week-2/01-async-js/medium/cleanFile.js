const fs = require("fs");
const path = require("path");
const getFullPath = (fileName) => path.join(__dirname, fileName);
function readMyFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(getFullPath(fileName), "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
async function cleanFile(fileName) {
  const data = await readMyFile(fileName);
  const cleanedData = data.replace(/\s+/g, " ").trim();
  fs.writeFile(getFullPath(fileName), cleanedData, (err) => {
    if (err) console.error(err);
    console.log("File Written Successfuly");
  });
}

cleanFile("dirtyFile.txt");
