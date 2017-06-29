var App123 = angular.module('myApp', ['infinite-scroll']);
App123.controller('scrollController', function($scope) {
  $scope.imagedetails = [1, 2, 3, 4, 5, 6, 7];

  $scope.loadMore = function() {
      
    var last = $scope.imagedetails[$scope.imagedetails.length - 1];
    for(var i = 1; i <= 7; i++) {
      $scope.imagedetails.push(last + i);
    }
  };
});