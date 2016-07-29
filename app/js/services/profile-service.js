'use strict';

module.exports = function(app) {

  app.factory('ProfileService', function($http, ErrorService) {
    const service = {};
    service.profile = {};

    service.getProfile = function(profileUrl,cb) {
      return $http({
        method: 'GET',
        headers: {
          profile: profileUrl
        },
        url: '/profile'
      })
      .then((res) => {
        service.profile = res.data;
        //this could potentially crash your stuff if there's no function passed into
        //getProfile. Even if you know you're the one using it it's a good idea to check
        //for that. You could use an if() or just cb && cb(). You could also catch the error
        //with a catch chained onto this then but it's probably better just to check sooner.
        cb();
      }, ErrorService.logError('Error on profile'));
    };
    return service;
  });
};
