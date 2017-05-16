angular.module("ctApp")
	.controller("caseDetail", [
		"$scope",
		"$state",
		"$apis",
		function($scope, $state, $apis) {

			$scope.report = {
				caseNo: "A838388388",
				carNo: "粤B 88888",
				caseTime: "2017-09-21 12:24",
				address:"深圳市福田区下梅林高达苑深圳市福田区下梅林高达苑",
				condition:"单方",
				accidentDuty:"单方"
			};

			$scope.historyCase = [{
				caseNo: "A838388388",
				carNo: "粤B 88888",
				caseTime: "2017-09-21 12:24",
				address:"深圳市福田区下梅林高达苑深圳市福田区下梅林高达苑",
				condition:"单方",
				accidentDuty:"单方"
			},{
				caseNo: "A838388388",
				carNo: "粤B 88888",
				caseTime: "2017-09-21 12:24",
				address:"深圳市福田区下梅林高达苑深圳市福田区下梅林高达苑",
				condition:"单方",
				accidentDuty:"单方"
			}];
		}
	]);