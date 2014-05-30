'use strict';

angular.module('mean.system').controller('EventController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {
        $scope.global = Global;
        $scope.val = 'hello world';

        $http.get('/events')
            .success(function(data) {
                $scope.events = data;
                console.log('Tried to get events');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });/*
        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                event: 'asc'     // initial sorting
            }
        }, {
            total: $scope.events.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')($scope.events, params.orderBy()) :
                    $scope.events;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });*/
/*
        // when submitting the add form, send the text to the node API
        $scope.createEvent = function() {
            $http.post('/events/:eventName', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.events = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };*/
    }]);

/*angular.module('main.system').
    controller('DemoCtrl', function($scope, $filter, ngTableParams) {
        var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        $scope.tableParams = new ngTableParams({
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
    });*/