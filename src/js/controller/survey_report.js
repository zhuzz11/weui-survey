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
			}];

			$scope.showEvaluate = false;
			$scope.openEvaluate = function(){
				$scope.showEvaluate = true;
			};

			$scope.score = 0;
			$scope.eva = {
				text: ""
			}
			$scope.evaluateScore = function(score){
				$scope.score = score;
			};
			$scope.cancel = function(){
				$scope.score = 0;
				$scope.eva.text = "";
				$scope.showEvaluate = false;
			};

			$scope.submitScore = function(){
				if($scope.score < 1){
					weui.topTips("请评分");
					return;
				}
				if($scope.eva.text.trim() == ""){
					weui.topTips("请输入评价信息");
					return;
				}
				$scope.score = 0;
				$scope.eva.text = "";
				$scope.showEvaluate = false;
				weui.toast("评价成功",function(){
					wx.closeWindow();
				});
			};
		}
	]);