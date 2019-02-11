let controllerFunction = ['$scope', 'dataService', function ($scope, dataService) {
    var vm = this;


    vm.support = function () {
        if (!vm.title || vm.title.length < 1 || !vm.place || vm.place.length < 1 || !vm.description || vm.description.length < 1) {
            alertify.error("تمام فیلد ها الزامی است.");
            return;
        }


        var ticket = {};
        ticket.title = vm.title;
        ticket.description = vm.description;
        ticket.place = vm.place;

        dataService.sendTicket(ticket).then(function (result) {
            alertify.success("اطلاعات شما با موفقیت ذخیره شد.");
        }, function (error) {
            alertify.error(error.data);
        });
    }

}];

let SupportController = controllerFunction;

export {
    SupportController
}