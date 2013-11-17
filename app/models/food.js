/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var FoodSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    latitude: {
        type: Number,
        default: 0
    },
    longitude: {
        type: Number,
        default: 0
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    end_time: {
        type: Date,
        default: Date.now
    },
    food_types: {
        type: [String],
        default: []
    }
});

/**
 * Validations
 */
FoodSchema.path('name').validate(function(name) {
    return name.length;
}, 'Event name cannot be blank.');

/**
 * Statics
 */
FoodSchema.statics = {
    findByTime: function(cb) {
        this.find({end_time: {"$gte": Date.now}}, cb);
    }
};

mongoose.model('Food', FoodSchema);
