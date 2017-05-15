angular.module("ctApp")
	.controller("surveyReport", [
		"$scope",
		"$state",
		"$apis",
		function($scope, $state, $apis) {
			$scope.report = {
				caseNo: "A838388388",
				carNo: "粤B 88888",
				driverName:"赵子龙",
				driverMobile:"17383838383",
				condition:"单方",
				accidentDuty:"单方"
			}

			$scope.imgList = [{
				url:"images/car.png",
				name:""
			},{
				url:"images/car.png",
				name:""
			},{
				url:"images/car.png",
				name:""
			},{
				url:"images/car.png",
				name:""
			},{
				url:"images/car.png",
				name:""
			},{
				url:"images/car.png",
				name:""
			}]

		}
	]);