'use strict';

angular.module('mean.events').controller('EventsController', ['$scope', 'Global', 'Events', '$http', '$filter', 'ngTableParams',
    function($scope, Global, Events, $http) {
        $scope.global = Global;
        $scope.package = {
            name: 'events'
        };
        $scope.val = 'hello world';

        $http.get('/events/example')
            .success(function(data) {
                $scope.events = data;
                $scope.myData = data;
                console.log('Tried to get events');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });


        $scope.gridOptions = { data: 'myData',
            enableRowSelection: false,
            filterOptions: $scope.filterOptions,
            columnDefs: [
            {field:'eventName', displayName:'Event'},
            {field:'eventDate', displayName:'Date'},
            {field:'eventState', displayName:'State'},
            {field: 'eventStatus', displayName: 'Event Status'},
            {field: 'eventCost', displayName: 'Cost'},
            {field: '', displayName: 'Attend!', cellTemplate: '<button  type="submit" class="btn btn-primary btn-xs">Attend!</button>'}
            ]
        };

/*
        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                eventName: 'asc'     // initial sorting
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
    }

]);
/*
angular.module('mean.events').
    controller('EventsController', function($scope, Global, $filter, ngTableParams) {
        $scope.val = 'hello world';
        $scope.datas = [
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

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {

            total: $scope.datas.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')($scope.datas, params.orderBy()) :
                    $scope.datas;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    });*/