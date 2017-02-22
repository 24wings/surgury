angular.module('app')
    .component('sidebar', {
        templateUrl: 'pages/sidebar/sidebar.html',
        bindings: {
            $router: '<'
        },
        controller: function ($http, $scope, $location, $scope) {
            var $ctrl = this;
            // $location.path('/');
            $scope.surgurys = [];
            $http.get('/data/getSurgery.json').then(function (rtn) {
                $scope.surgurys = rtn.data.data;
                console.log(this.surgurys);
            });

            $scope.$routerOnActivate = function (next) {
                // Get the hero identified by the route parameter
                console.log(next)

            };

            this.viewSurgury = function (surgury) {
                $location.url('/surgury/' + surgury.id + '?doctorId=' + surgury.id);


            };
            $scope.hello = function () {
                console.log('hello')
            }
        }
    })