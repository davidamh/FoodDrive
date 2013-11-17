/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    food = mongoose.model('Food'),
    _ = require('lodash');


/**
 * Find food by id
 */
exports.food = function(req, res, next, id) {
    'use strict';
    Food.load(id, function(err, food) {
        if (err) {
            return next(err);
        }
        if (!food) {
            return next(new Error('Failed to load food ' + id));
        }
        req.food = food;
        next();
    });
};

/**
 * Create a food
 */
exports.create = function(req, res) {
    'use strict';
    var food = new Food(req.body);
    food.user = req.user;

    food.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                food: food
            });
        } else {
            res.jsonp(food);
        }
    });
};

/**
 * Update a food
 */
exports.update = function(req, res) {
    'use strict';
    var food = req.food;

    food = _.extend(food, req.body);

    food.save(function(err) {
        res.jsonp(food);
    });
};

/**
 * Delete a food
 */
exports.destroy = function(req, res) {
    'use strict';
    var food = req.food;

    food.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(food);
        }
    });
};

/**
 * Show aa food
 */
exports.show = function(req, res) {
    res.jsonp(req.food);
};

/**
 * List of foods
 */
exports.all = function(req, res) {
    food.find().sort({date: -1}).exec(function(err, foods) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(foods);
        }
    });
};
