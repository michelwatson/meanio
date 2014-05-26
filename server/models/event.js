'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({


    eventDate: {
        type: String,
        required: false
    },
    eventCost: {
        type: String,
        required: false
    },
    eventName: {
        type: String,
        required: true
    },
    eventState: {
        type: String,
        required: false
    },
    eventStatus: {
        type: String,
        required: false
    }
});
mongoose.model('Event', EventSchema);