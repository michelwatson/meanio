'use strict';

angular.module('mean.events').controller('EventsController', ['$scope', 'Global', 'Events', '$http', '$filter', 'ngTableParams',
    function($scope, Global, Events, $http) {
        $scope.global = Global;
        $scope.package = {
            name: 'events'
        };
        $scope.val = 'hello world';
        $scope.eState = '';
        $scope.eStatus = '';
        $http.get('/events/example')
            .success(function(data) {
                $scope.events = data;
                $scope.myData = data;
                $scope.myData2 = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        $scope.filterOptions = {
            useExternalFilter: true
        };

        $scope.gridOptions = { data: 'myData2',
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

      /*  $scope.$watch('eventFilter', function(eventStatus) {
            $scope.myData2 = [];
            $scope.myData.forEach(function(r) {
                if (r.eventStatus === eventStatus) {//parseInt(r.eventCost, 10) >= val) {
                    $scope.myData2.push(r);
                }
                else {
                    $scope.myData2 = $scope.myData;
                }
            });
        });*/
        $scope.$watch('eventFilter', function(s) {
            if (true) {
                if (true) {
                    $scope.myData2 = [];
                    $scope.myData.forEach(function(r) {
                        $scope.eStatus = s;
                        if ((r.eventStatus === s && r.eventState === $scope.eState) || (r.eventStatus === s && $scope.eState === '')) {//parseInt(r.eventCost, 10) >= val) {
                            $scope.myData2.push(r);
                        }
                    });
                }
                else {
                    $scope.myData2 = $scope.myData;
                }
            }
            else {
                $scope.myData2 = $scope.myData;
            }
        });
        $scope.$watch('eventState', function(s) {
            if (true) {
                if (true) {
                    $scope.myData2 = [];
                    $scope.myData.forEach(function(r) {
                        $scope.eState = s;
                        if ((r.eventState === s && r.eventStatus === $scope.eStatus) || (r.eventState === s &&  $scope.eStatus === '')) {//parseInt(r.eventCost, 10) >= val) {
                            $scope.myData2.push(r);
                        }
                    });
                }
                else {
                    $scope.myData2 = $scope.myData;
                }
            }
            else {
                $scope.myData2 = $scope.myData;
            }
        });
        $scope.$watch('lowerLimit', function(n, o) {
            console.log('Tried to get lowerlimit');
            if (n) {
                var val = parseInt(n, 10);
                if (val) {
                    $scope.myData2 = [];
                    $scope.myData.forEach(function(r) {
                        if (parseInt(r.eventCost, 10) >= val) {
                            $scope.myData2.push(r);
                        }
                    });
                }
                else {
                    $scope.myData2 = $scope.myData;
                }
            }
            else {
                $scope.myData2 = $scope.myData;
            }
        });
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