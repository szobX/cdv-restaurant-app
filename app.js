const express = require('express')
// import Server from './server.js'
let Server = require('./server')

console.log(Server)
const server = new Server(3005);

server.start()



