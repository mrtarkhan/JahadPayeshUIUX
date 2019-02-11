let controllerFunction = ['$scope', '$timeout', '$state', '$stateParams', 'dataService', function ($scope, $timeout, $state, $stateParams, dataService) {
    var vm = this;
    var graphDataUrl = '/api/profile/graphData.json';

    vm.profileData = {};
    vm.profileData.listNews = [];

    if ($stateParams.profileId) {
        getProfileData(profileId);
    }

    var profileId = $stateParams.profileId;



    vm.chartOptions = {
        dataSource: {
            data: vm.profileData.chartData
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: \n #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 100,
            data: vm.profileData.chartData
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    };


    vm.search = function () {
        if (!vm.searchKeyword || vm.searchKeyword.length < 2) {
            alertify.error("تعداد حروف جستجو نمی تواند کمتر از دو حرف باشد.")
            return;
        }

        dataService.searchProfile(vm.searchKeyword).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    getProfileData(result.data.id);
                });
            });
        }, function (error) {
            alertify.error(error.data);
        });

    }


    //call them
    function constructor() {
        var g = document.querySelector("#sigma-container");
        var p = g.parentNode;
        p.removeChild(g);
        var c = document.createElement('div');
        c.setAttribute('id', 'sigma-container');
        p.appendChild(c);

        var s = new sigma({
            graph: vm.profileData.graphData,
            container: 'sigma-container',
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
        s.refresh();
    }


    function getProfileData(id) {
        dataService.getProfileData(id).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    angular.copy(result.data, vm.profileData);
                    constructor();
                    var chart = $('#chart-elem').data('kendoChart');
                    chart.setOptions({
                        series: [{
                            type: "pie",
                            startAngle: 100,
                            data: vm.profileData.chartData
                        }]
                    });
                    chart.refresh();
                });
            });
        }, function (error) {
            alertify.error(error.message);
        })
    }


}];


let ProfileListController = controllerFunction;

export {
    ProfileListController
}