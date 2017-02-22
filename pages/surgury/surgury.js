angular.module('app')
    .component('surgury', {
        templateUrl: 'pages/surgury/surgury.html',
        bindings: {
            $router: '<'
        },
        controller: function ($routeParams, $location, $http, $scope) {
            var doctorId = $location.search().doctorId;
            $scope.selectedSurgury = 0;
            $scope.currentSurgury = {
                id: doctorId,
                surgurys: []
            };
            $http.get('/data/getDoctorInfo.json').then(function (rtn) {
                var allSurgurys = rtn.data.data;
                $scope.currentSurgury = allSurgurys.find(function (item) {
                    return item.doctorId == doctorId;
                });
                console.log($scope.currentSurgury.surgurys)

            });


            $scope.addSelectectSurgury = function () {
                $scope.selectedSurgury++;

            }
            $scope.minSelectectSurgury = function () {
                $scope.selectedSurgury == 0 ? '' : $scope.selectedSurgury--;

            }



        }
    });