let controllerFunction = ['$scope', '$timeout', '$state', 'dataService', function ($scope, $timeout, $state, dataService) {
    var vm = this;


    $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
    $scope.todayWords = [];
    $scope.weekWords = [];
    $scope.monthWords = [];
    $scope.listNews = [];
    vm.dashboardSummery = {};


    //options
    vm.mainGridOptions = {

        // dataSource: {
        //     transport: {
        //         read: {
        //             url: apis.recentNews,
        //         }
        //         //parameterMap: function (data, type) {
        //         //    return kendo.stringify(data);
        //         //}
        //     },
        //     schema: {
        //         data: "data",
        //         total: "total"
        //     },
        //     serverPaging: true,
        //     pageSize: 10
        // },
        dataSource: [],
        columns: [{
            field: "row",
            title: "ردیف",
            width: 55
        }, {
            field: "topic",
            title: "عنوان",
            width: 160
        }, {
            field: "publishDate",
            title: "تاریخ",
            width: 115
        }, {
            field: "publishTime",
            title: "زمان",
            width: 65
        }, {
            field: "agency",
            title: "خبرگزاری",
            width: 100
        }],
        height: 478,
        sortable: false,
        filterable: false,
        scrollable: true,
        type: "compact",
        selectable: "row",
        pageable: {
            pageSizes: [20, 50, 100, 1000],
            numeric: false
        },
        change: onChangeGrid
    };

    vm.tabOptions = {
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    };



    //shared functions
    vm.refresh = function () {
        getTodayCloudWord();
        getWeekCloudWord();
        getMonthCloudWord();
        getRecentlyNews();
        getListNews();
        getNewsInformation();
        getAgencies();
    };


    //call them
    vm.refresh();


    function getNewsInformation() {
        dataService.getNewsInformation().then(function (result) {
            angular.copy(result.data, vm.dashboardSummery);
        }, function (error) {
            alertify.error(error.data);
        })
    }

    function getTodayCloudWord() {
        dataService.getCloudWord(1).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    angular.copy(result.data, $scope.todayWords);
                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    }

    function getWeekCloudWord() {
        dataService.getCloudWord(2).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    angular.copy(result.data, $scope.weekWords);
                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    }

    function getMonthCloudWord() {
        dataService.getCloudWord(3).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.monthWords = angular.copy(result.data);
                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    }


    function getRecentlyNews() {
        dataService.getRecentlyNews().then(function (result) {
            var grid = angular.element("#recent-news").data("kendoGrid");
            grid.setDataSource(new kendo.data.DataSource({
                data: result.data,
                pageSize: 20
            }));
        }, function (error) {
            alertify.error(error.data);
        });
    }

    function getListNews() {
        //listNews
        dataService.getListNews().then(function (result) {
            console.log(result);
            angular.copy(result.data, $scope.listNews);
        }, function (error) {
            throw error;
        })
    }


    function onChangeGrid(e) {
        var selectedRow = this.select();
        vm.selectedNews = this.dataItem(selectedRow[0]);
        console.log(vm.selectedNews);
        $state.go("article", {
            newsId: vm.selectedNews.id
        });
    }


    function getAgencies() {
        if (agencies.length > 0)
            return;
            
        dataService.getAgencies().then(function (result) {
            agencies = [];
            angular.forEach(result.data, function(value){
                agencies.push(value);
            });
        }, function (error) {
            throw error;
        })
    }


}];

let DashboardController = controllerFunction;

export {
    DashboardController
}