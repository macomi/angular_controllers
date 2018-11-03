(function() {
    //-------- Controller --------//
    function MainCtrl($scope, OneService) {

        $scope.items = [];

        $scope.addItem = function() {
            $scope.items.push($scope.itemsService.valueInput); // add item
            $scope.cleanInput(); // clear input
        }

        $scope.cleanInput = function() {
            $scope.itemsService.valueInput = ''; // clear input
        }

        $scope.itemsService = OneService; // get service
    }

    function SecondCtrl($scope, OneService) {
        $scope.itemsService = OneService; // get service
    }

    //-------- Service --------//
    function OneService() {
        var res = function() {};

        res.items = []; // list items
        res.valueInput = '';

        res.addItem = function() {
            res.items.push(res.valueInput); // add item
        }

        return res;
    }

    angular
        .module('app', [])
        .controller('MainCtrl', MainCtrl)
        .factory('OneService', OneService);

})();