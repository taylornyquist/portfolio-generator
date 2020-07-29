const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Checkout index.html to see the output!");
});