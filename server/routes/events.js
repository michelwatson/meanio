'use strict';

module.exports = function(app) {

    // Home route
    var events = require('../controllers/events');

  //  app.route('/')
   //     .get(index.render);

    app.get('/events', events.all);
    app.post('/events/:eventName', events.create);

};
