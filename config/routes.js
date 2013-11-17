module.exports = function(app, passport, auth) {
    //Food Routes
    var food = require('../app/controllers/food-ctrl');
    app.get('/food', food.all);
    app.post('/food', food.create);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
