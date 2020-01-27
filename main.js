const fs = require('fs');
const path = require('path');

let args = process.argv;
let [node, main, ...files ] = args;

files.forEach(file => {
    let filePath = path.join(__dirname + "/" + file);
    fs.exists(filePath, (exists) => {
        if(exists){
            createError(`${file} already exists in path`);
        }
        fs.writeFile(filePath, "", (err) => {
            if(err){
                createError('problem_creating_file');
            }
        })
    })
})

function createError(message){
    let error = new Error();
    error.message = message;
    throw error;
}

function checkIfFileExists(file) {
    fs.exists(filePath, (exists) => {
        if(exists){
            createError(`${file} already exists in path`);
        }
    })
}

function writeFile(file){
    fs.writeFile(file, "", (err) => {
        if(err){
            createError('problem_creating_file');
        }
    });
}
