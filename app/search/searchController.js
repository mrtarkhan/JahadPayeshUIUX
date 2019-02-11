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


    vm.mainGridOptions = {
        dataSource: [],
        columns: [{
            field: "row",
            title: "ردیف",
            width: 100
        }, {
            field: "title",
            title: "عنوان",
            width: 600
        }, {
            field: "date",
            title: "تاریخ",
            width: 200
        }, {
            field: "time",
            title: "زمان",
            width: 200
        }, {
            field: "source",
            title: "خبرگزاری",
            width: 300
        }],
        height: 500,
        sortable: false,
        filterable: false,
        scrollable: false,
        type: "compact",
        selectable: "row",
        pageable: false,
        change: onChangeGrid
    };


    vm.search = function () {
        if (!vm.searchKeyword || vm.searchKeyword.length < 2) {
            alertify.error("تعداد حروف جستجو نمی تواند کمتر از دو حرف باشد.")
            return;
        }

        dataService.search(vm.searchKeyword).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    var grid = $("#search-result").data("kendoGrid");
                    grid.dataSource.data(result.data);
                    grid.refresh();
                });
            });
        }, function (error) {
            alertify.error(error.data);
        });

    }


    vm.dropDownOptions = {
        dataSource: [],
        optionLabel: 'انتخاب کنید...',
        dataTextField: "title",
        dataValueField: "id"
    };

    getAgencies();

    function getAgencies() {

        $timeout(function () {

            var select = $("#agency-dropdown").data("kendoDropDownList");
            select.dataSource.data(agencies);
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