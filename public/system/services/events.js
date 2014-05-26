'use strict';

angular.module('mean.system').factory('Events', ['$resource', function($resource) {
    return $resource('events/', {
        eventName: '@name'
    });
}]);