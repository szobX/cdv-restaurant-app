
const mainRouter = require('express').Router()

const MenuRoutes = require('./routes/menu.js')

 

module.exports = ()=>{
    const app = mainRouter
 MenuRoutes(mainRouter)
 return app
}
