angular.module("ctApp")
	.controller("feedback", [
		"$scope",
		"$state",
		"$apis",
		function($scope, $state, $apis) {

			$scope.feedback = {
				text:""
			};

			$scope.submit = function(){

				if($scope.feedback.text.trim() == ""){
					weui.topTips("请输入反馈信息");
					return;
				}
				weui.toast("提交成功",function(){
					wx.closeWindow();
				});
			};

		}
	]);