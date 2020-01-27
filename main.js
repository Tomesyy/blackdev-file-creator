const fs = require('fs');
const path = require('path');

let args = process.argv;
let [node, main, ...files ] = args;

files.forEach(file => {
    let filePath = path.join(__dirname + "/" + file);
    checkIfFileExists(filePath);
    writeFile(filePath);
})

function resolvePath(file){
    let filePath = path.join(__dirname + "/" + file);
    return filePath;
}

function createError(message){
    let error = new Error();
    error.message = message;
    throw error;
}

function checkIfFileExists(file) {
    fs.exists(file, (exists) => {
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
