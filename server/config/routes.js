module.exports = (app) => {
    require('../api/modules/settings/admin/menu/routes/MenuRoutes')(app);
    require('../api/modules/authentication/routes/AuthRoutes')(app);
    }
    