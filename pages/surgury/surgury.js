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

            function getDataBydoctorId(doctorId) {
                $http.get('/assets/data/getDoctorInfo.json').then(function (rtn) {
                    var allSurgurys = rtn.data.data;
                    $scope.currentSurgury = allSurgurys.find(function (item) {
                        return item.doctorId == doctorId;
                    });
                    console.log($scope.currentSurgury.surgurys)

                });

            }

            // 进入刷新界面
            getDataBydoctorId(doctorId);


            $scope.addSelectectSurgury = function () {
                $scope.selectedSurgury++;

            }
            $scope.minSelectectSurgury = function () {
                $scope.selectedSurgury == 0 ? '' : $scope.selectedSurgury--;

            }
            $scope.allowDrop = function (event) {
                event.preventDefault();
            }
            $scope.refershData = function (event) {
                var data = event.dataTransfer.getData('text');
                var surgury = JSON.parse(JSON.parse(data));

                getDataBydoctorId(surgury.id);

            }


        }
    });