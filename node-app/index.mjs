import fs from "fs";

fs.appendFile('my-file.txt', 'Created by Node', (err) => {
    if (err) throw err;
    console.log("file saved");
});

setTimeout(() => console.log('End'), 30000);