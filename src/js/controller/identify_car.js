angular.module("ctApp")
	.controller("identifyCar", [
		"$scope",
		"$state",
		"$apis",
		"$timeout",
		function($scope, $state, $apis, $timeout) {

			$scope.identifyFailed = false;
			$scope.send = function(carno) {
				alert(carno);
			};

			var loading = null;
			$scope.uploadImg = function() {
				loading = weui.loading("正在识别...");
				$timeout(function(){
					$scope.identifyFailed = true;
					loading.hide();
				},2000);
			};
		}
	]);