module.exports = function(app) {
    //Article Routes
    var food = require('../app/controllers/food-ctrl');
    app.get('/food', food.all);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
