'use strict';

/*angular.module('mean.events').controller('EventsController', ['$scope', 'Global', 'Events', '$http',
    function($scope, Global, Events, $http) {
        $scope.global = Global;
        $scope.package = {
            name: 'events'
        };
        $scope.val = 'hello world';

        $http.get('/events/example')
            .success(function(data) {
                $scope.events = data;
                console.log('Tried to get events');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

]);*/
angular.module('main', ['ngTable'], ['ngTableParams', function(NgTableParams) {}]).
    controller('DemoCtrl', function($scope, Global, $filter, NgTableParams) {
        $scope.val = 'hello world';
        var data = [
            {name: 'Moroni', age: 50},
            {name: 'Tiancum', age: 43},
            {name: 'Jacob', age: 27},
            {name: 'Nephi', age: 29},
            {name: 'Enos', age: 34},
            {name: 'Tiancum', age: 43},
            {name: 'Jacob', age: 27},
            {name: 'Nephi', age: 29},
            {name: 'Enos', age: 34},
            {name: 'Tiancum', age: 43},
            {name: 'Jacob', age: 27},
            {name: 'Nephi', age: 29},
            {name: 'Enos', age: 34},
            {name: 'iancum', age: 43},
            {name: 'Jacob', age: 27},
            {name: 'Nephi', age: 29},
            {name: 'Enos', age: 34}];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    });