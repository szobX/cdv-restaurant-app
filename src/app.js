const express = require("express");
const Sequelize = require("sequelize");
// const sequalize = new Sequelize('')
// import Server from './server.js'
let Server = require("./server");

console.log(Server);
const server = new Server(3005);

server.start();
