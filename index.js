var app = angular.module("app", []);

app.controller("ListController", function($scope) {


    $scope.todos = [];

    $scope.options = [{
        "priority": "A low priority item",
        "value": "green",
        "number": "1",
    }, {
        "priority": "A medium priority item",
        "value": "yellow",
        "number": "2",
    }, {
        "priority": "A high priority item",
        "value": "red",
        "number": "3",
    }];


    $scope.addNewToDo = function(toDo) {
        var todo = { 
        	"newtask": $scope.newtext, 
        	"value": $scope.selectedOption.value, 
        	"number": $scope.selectedOption.number};
        $scope.todos.unshift(todo);
        $scope.newtext=null;
    };

    $scope.removeItem = function(todo, $index) {
        $scope.todos.splice($index, 1);
    };

});