let controllerFunction = ['$scope', '$timeout', 'dataService', '$state', function ($scope, $timeout, dataService, $state) {
    var vm = this;

    //call them
    function search() {
        //listNews
        dataService.search().then(function (result) {
            var grid = angular.element("#search-result").data("kendoGrid");
            grid.setDataSource(new kendo.data.DataSource({
                data: result.data,
                pageSize: 50
            }));
        }, function (error) {
            console.log(error.message);
        })
    }

    vm.dropDownOptions = {
        filter: 'contains',
        minLength: 2,
        dataSource: {
            data: agencies,
            schema: {
                model: {
                    fields: {
                        id: {
                            type: 'string'
                        },
                        name: {
                            type: 'string'
                        }
                    }
                }
            }
        },
        dataTextField: 'name',
        dataValueField: 'id',
        noDataTemplate: 'اطلاعاتی یافت نشد!',
        placeholder: 'خبرگزاری ...',
        // template: '<span class="badge" style="display: inline-block; min-width: 60px;">#:code #</span> <span>#:name #</span>',

    };


    vm.mainGridOptions = {
        dataSource: {
            data: {
                items: [],
                totalCount: 0
            },
            schema: {
                data: "items",
                total: "totalCount"
            },
            //serverPaging: true,
            pageSize: 20
        },
        columns: [{
            field: "section",
            title: "بخش",
            width: 100
        }, {
            field: "topic",
            title: "عنوان",
            width: 400
        }, {
            field: "publishDate",
            title: "تاریخ",
            width: 150
        }, {
            field: "publishTime",
            title: "زمان",
            width: 150
        }, {
            field: "agency",
            title: "خبرگزاری",
            width: 250
        }],
        height: 500,
        sortable: false,
        filterable: false,
        scrollable: true,
        type: "compact",
        selectable: "row",
        pageable: true,
        change: onChangeGrid
    };


    vm.search = function () {
        if (!vm.searchKeyword || vm.searchKeyword.length < 2) {
            alertify.error("تعداد حروف جستجو نمی تواند کمتر از دو حرف باشد.")
            return;
        }

        dataService.search(vm.searchKeyword, vm.agency, vm.startDate, vm.endDate, vm.category).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    var grid = $("#search-result").data("kendoGrid");
                    grid.setDataSource({
                        data: {
                            items: result.data.items,
                            totalCount: result.data.totalCount
                        },
                        schema: {
                            data: "items",
                            total: "totalCount"
                        },
                        serverPaging: false,
                        pageSize: 20
                    });
                    grid.refresh();
                });
            });
        }, function (error) {
            alertify.error(error.data);
        });

    }


    getAgencies();

    function getAgencies() {

        $timeout(function () {

            var select = $("#agency-dropdown").data("kendoDropDownList");
            // select.setDataSource({
            //     data: agencies,


            // });
        });

    };

    function onChangeGrid(e) {
        var selectedRow = this.select();
        vm.selectedNews = this.dataItem(selectedRow[0]);
        console.log(vm.selectedNews)
        $state.go("article", {
            newsId: vm.selectedNews.id
        });
    }


}];

let SearchController = controllerFunction;

export {
    SearchController
}