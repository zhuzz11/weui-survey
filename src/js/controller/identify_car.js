angular.module("ctApp")
	.controller("identifyCar", [
		"$scope",
		"$state",
		"$apis",
		function($scope, $state, $apis) {

			$scope.prefix = "";

			$scope.send = function(carno){
				alert(carno);
			}
		}
	]);