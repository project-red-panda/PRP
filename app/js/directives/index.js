'use strict';

//Overall it seems like your use of directives boils down to them being HTML partials rather
//than encapsulated components. In some ways this is even a little closer to the way that
//directives may have been done once but when it comes down to it it makes the directives
//themselves a little unnecessary. I would consider going one way or the other. Breaking some
//of the html out into views and having routing handle them or taking some of the controllers
//that you have them interacting with and making them properties of the directives. You should
//generally count on directives having an isolate scope, because conceptually that means that
//you only have the functionality that you've added to them and you only have attributes that
//you've passed in which makes them encapsulated pieces of your view and it's associated logic.

module.exports = function(app) {
  require('./blog-full-view-directive')(app);
  require('./blog-list-directive')(app);
  require('./blog-template-directive')(app);
  require('./nav-directive')(app);
};
