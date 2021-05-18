// const express = require("express");
// const Sequelize = require("sequelize");
// const sequalize = new Sequelize('')
// import Server from './server.js'
import Server from './server.js';
const server = new Server(3005);

server.start();
