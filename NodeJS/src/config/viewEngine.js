import express, { request } from 'express';

let configViewEngine = (app) => {
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
    //arrow function
}

module.exports = configViewEngine;