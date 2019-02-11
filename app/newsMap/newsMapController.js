let controllerFunction = ['$scope', '$timeout', 'dataService', function ($scope, $timeout, dataService) {
    var vm = this;


    vm.mapData = {};
    vm.currentTip = '';
    vm.mapData.c51 = 1500;
    vm.mapData.c21 = 2500;


    vm.search = function () {
        if (!vm.agency || vm.agenct.length < 2 || !vm.category || vm.category.length < 2) {
            alertify.error("اطلاعات صحیح نیست.");
            return;
        }

        dataService.searchForMap(vm.agency, vm.category).then(function (result) {
            $timeout(function () {
                $scope.$apply(function () {
                    vm.mapData = angular.copy(result.data);
                });
            });
        }, function (error) {
            alertify.error(error.data);
        });
    }


    vm.showTooltip = function (evt, city, text) {
        let tooltip = document.getElementById("tooltip");
        tooltip.innerHTML = 'تعداد خبرهای ثبت شده: ' + city;
        tooltip.style.display = "block";
        var isToggled = document.getElementById("sidebar").classList.contains("sidebar-toggle");
        var isMoreThan700 = window.innerWidth > 700;
        tooltip.style.right = isToggled && isMoreThan700 ? '150px' : '20px';
        tooltip.style.top = '30%';
    }

    vm.hideTooltip = function (evt, city) {

        var tooltip = document.getElementById("tooltip");
        tooltip.style.display = "none";
    }



}];

let NewsMapController = controllerFunction;

export {
    NewsMapController
}