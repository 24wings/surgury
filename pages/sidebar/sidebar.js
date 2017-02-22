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
            $http.get('/assets/data/getSurgery.json').then(function (rtn) {
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
            $scope.delete = function (surgury) {
                surgury = JSON.parse(surgury);
                var deleteSurgury = $scope.surgurys.find(function (item) {
                    return surgury.id == item.id
                });
                console.log(deleteSurgury)
                $scope.$apply(function () {
                    $scope.surgurys.splice($scope.surgurys.indexOf(deleteSurgury), 1);
                });
            };
            $scope.setDragData = function (data, event) {
                event.dataTransfer.setData("text/plain", JSON.stringify(data));
            }
        }
    })