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
        //getListNews();
        getNewsInformation();
        getAgencies();
        getTodayTopics();
        getWeekTopics();
        getMonthTopics();
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



    //cloud words
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




    //topics
    function getTodayTopics () {
        dataService.getTopicsData(1).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    $("#today-topics").kendoChart({
                        title: {
                            text: "خبرهای هر موضوع"
                        },
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "bar"
                        },
                        series: [{
                            name: "خبرهای این موضوع",
                            data: angular.copy(result.data.numbers)
                        }],
                        valueAxis: {
                            max: 140000,
                            line: {
                                visible: false
                            },
                            minorGridLines: {
                                visible: true
                            },
                            labels: {
                                rotation: "auto"
                            }
                        },
                        categoryAxis: {
                            categories: angular.copy(result.data.topics),
                            majorGridLines: {
                                visible: false
                            }
                        },
                        tooltip: {
                            visible: true,
                            template: "#= series.name #: #= value #"
                        }
                    });
        
                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    }

    function getWeekTopics () {
        dataService.getTopicsData(2).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    $("#week-topics").kendoChart({
                        title: {
                            text: "خبرهای هر موضوع"
                        },
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "bar"
                        },
                        series: [{
                            name: "خبرهای این موضوع",
                            data: angular.copy(result.data.numbers)
                        }],
                        valueAxis: {
                            max: 140000,
                            line: {
                                visible: false
                            },
                            minorGridLines: {
                                visible: true
                            },
                            labels: {
                                rotation: "auto"
                            }
                        },
                        categoryAxis: {
                            categories: angular.copy(result.data.topics),
                            majorGridLines: {
                                visible: false
                            }
                        },
                        tooltip: {
                            visible: true,
                            template: "#= series.name #: #= value #"
                        }
                    });                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    }

    function getMonthTopics () {
        dataService.getTopicsData(3).then(function (result) {
            $timeout(function () {
                $("#month-topics").kendoChart({
                    title: {
                        text: "خبرهای هر موضوع"
                    },
                    legend: {
                        visible: false
                    },
                    seriesDefaults: {
                        type: "bar"
                    },
                    series: [{
                        name: "خبرهای این موضوع",
                        data: angular.copy(result.data.numbers)
                    }],
                    valueAxis: {
                        max: 140000,
                        line: {
                            visible: false
                        },
                        minorGridLines: {
                            visible: true
                        },
                        labels: {
                            rotation: "auto"
                        }
                    },
                    categoryAxis: {
                        categories: angular.copy(result.data.topics),
                        majorGridLines: {
                            visible: false
                        }
                    },
                    tooltip: {
                        visible: true,
                        template: "#= series.name #: #= value #"
                    }
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
                data: result.data
            }));
        }, function (error) {
            alertify.error(error.data);
        });
    }




    function getListNews() {
        //listNews
        dataService.getListNews().then(function (result) {
            angular.copy(result.data, $scope.listNews);
        }, function (error) {
            throw error;
        })
    }

    function onChangeGrid(e) {
        var selectedRow = this.select();
        vm.selectedNews = this.dataItem(selectedRow[0]);
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