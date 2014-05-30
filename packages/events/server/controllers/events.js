'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Event = mongoose.model('Event');
exports.all = function(req, res) {
        Event.find(function(err, events) {
            if (err) {
                console.log('failed to create an event ' + err);
                res.send(err);
            } else {
                console.log('tried to create an event ' + err);
                res.jsonp(events);
            }
        });
};
/*exports.all = function(req, res) {
    Event.find().exec(function(err, events) {
        if (err) {
            res.render('error ', {
                status: 500
            });
        } else {
            res.jsonp(events);
        }
    });
};*/

/*exports.create =  function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    var event = new Event({eventNamereq.body});
    event.save({
        eventName : req.body.text
    }, function(err, event) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        event.find(function(err, events) {
            if (err)
                res.send(err)
            res.jsonp(events);
        });
    });

};*/

exports.create = function(req, res) {
    var events = new Event({eventName: req.body.text});
    events.save(function (err) {
        if (err) {
            console.log('failed to create an event ' + err);
            return res.send('/index');
        } else {
            res.jsonp(events);
            console.log('tried to create an event ' + err);
        }
    });
};
/**
 * Created by mwatson on 5/25/2014.
 */
