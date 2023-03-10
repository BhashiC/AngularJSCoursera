(function () {
   'use strict'
   angular.module('Assignment1', []).controller('Assignment1Controller', Assignment1Controller);
   Assignment1Controller.$injector = ["$scope"];
   function Assignment1Controller($scope) {
      $scope.userInput = "";
      $scope.displayMsg = "";
      $scope.fontColor = "";
      $scope.generateMsg = function () {
         var arr = $scope.userInput.split(',');
         var arrFiltered = arr.filter(function (el) {
            return el.trim() != "";
         });
         console.log(arrFiltered.length);
         if (arrFiltered.length == 0) {
            $scope.displayMsg = "Please enter data first";
            document.getElementById("lunch-menu").style.borderColor = "#d9534f";
            document.getElementById("divDisplayMsg").style.color = "#d9534f";
         }
         else if (arrFiltered.length > 0 && arrFiltered.length <= 3) {
            $scope.displayMsg = "Enjoy!";
            document.getElementById("lunch-menu").style.borderColor = "#5cb85c";
            document.getElementById("divDisplayMsg").style.color = "#5cb85c";
         }
         else {
            $scope.displayMsg = "Too much!";
            document.getElementById("lunch-menu").style.borderColor = "#5cb85c";
            document.getElementById("divDisplayMsg").style.color = "#5cb85c";
         }
      };
   }

})();