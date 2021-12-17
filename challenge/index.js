// Reading the file using default
// fs yarn package
const fs = require("fs");

// require csvtojson module
const CSVtoJSON = require('csvtojson');

// convert users.csv file to JSON array
CSVtoJSON().fromFile('challenge/input.csv')
    .then(users => {
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