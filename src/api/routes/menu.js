// const route = require('express').Router();
import express from 'express';
// const menuController = require('../../models/menu/controller.js');

const MenuRoutes = (app) => {
    const router = express.Router();
    const route = '/api/menus';

    router.get('/', (request, res) => {
        console.log(request, res);
        return res.send({ message: 'Menus GET ' });
    });
    router.get('/:id', (request, response) => {
        console.log(request, response);
        return response.send({ ...request.params });
    });

    app.use(route, router);
};
export default MenuRoutes;
// module.exports = MenuRoutes;
