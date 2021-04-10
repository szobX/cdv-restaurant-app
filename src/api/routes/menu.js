const route = require('express').Router()


const MenuRoutes  = (app) =>{
    app.use('/menus',route);
console.log('init')
    route.get('/',(request,response)=>{
        console.log(request)
        return response.json(
            [{
               postion:1,
               title:'Kotlet schabowy',
               price:30,
               curreny:'ZŁ' 
            }]
        )
    })
}

module.exports = MenuRoutes