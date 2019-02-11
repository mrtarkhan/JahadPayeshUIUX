let controllerFunction = ['$scope', '$state', '$timeout', '$stateParams', 'dataService', function ($scope, $state, $timeout, $stateParams, dataService) {
    var vm = this;
    if (!$stateParams.newsId) {
        alertify.error('اطلاعات صحیح نیست.');
        $state.go("dashboard");
    }

    var newsId = $stateParams.newsId;

    getArticleData(newsId);


    //methods
    function getArticleData(id) {
        dataService.getArticleData(id).then(function (result) {
            $timeout(function(){
                $scope.$apply(function(){
                    vm.news = angular.copy(result.data);
                });
            }, 500);
        }, function (error) {
            alertify.error(error.data);
        });
    };



    vm.loadNews = function (id) {
        getArticleData(id);
    }

    vm.loadEntity = function (id) {
        $state.go("profilelist", {
            profileId: id
        });
    }

}];

let ArticleController = controllerFunction;

export {
    ArticleController
}