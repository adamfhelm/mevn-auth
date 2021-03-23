const MenuController = require('../controllers/menuController');
const express = require('express');
const router = express.Router();

module.exports = (app) => {

    // set api to a static base route to diferentiate from application routes
    app.use('/api', router);

    router.route('/menu')
        .get(MenuController.getAllMenus)
        .post(MenuController.createMenu);

    router.route('/menu/:id')
        .get(MenuController.getMenu)
        .put(MenuController.updateMenu)
        .delete(MenuController.deleteMenu);
    };