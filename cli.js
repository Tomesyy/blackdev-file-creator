#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

let [, , ...files ] = process.argv;

files.forEach(fileName => {
    checkIfFileExists(fileName);
    writeFile(fileName);
    return fileName;
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
    const filePath = resolvePath(file);
    fs.exists(filePath, (exists) => {
        if(exists){
            createError(`${file} already exists in path`);
        }
    })
}

function writeFile(file){
    const filePath = resolvePath(file);
    fs.writeFile(filePath, "", (err) => {
        if(err){
            createError('problem_creating_file');
        }
    });
}
