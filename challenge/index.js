// Reading the file using default
// fs yarn package
const fs = require("fs");

// require csvtojson module
const CSVtoJSON = require('csvtojson');

// convert users.csv file to JSON array
CSVtoJSON().fromFile('challenge/input.csv')
    .then(users => {
        console.log(users)
        for (let x = 0; x < users.length; x++) {
            const element = users[x];
            console.log(element)
            if (element.see_all === "no" || element.see_all === '' || element.see_all === '0') element.see_all = false;
            if (element.see_all === "yes") element.see_all = true;
        }
        // users is a JSON array
        // log the JSON array
        fs.writeFileSync('challenge/output.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });
    }).catch(err => {
        // log error if any
        console.error(err);
    });