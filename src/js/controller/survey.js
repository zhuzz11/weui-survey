angular.module("ctApp")
	.controller("surveyEdit", [
		"$scope",
		"$state",
		"$apis",
		"$timeout",
		"$interval",
		function($scope, $state, $apis, $timeout, $interval) {

			$scope.closeTip = function() {
				$(".photo-tip").fadeOut();
			};

			$scope.needMorePhoto = true;

			$scope.choiceType = function() {
				weui.actionSheet([{
					label: '被别人划了，有划痕',
					onClick: function() {
						$("#type-text").text('被别人划了，有划痕');
					}
				}, {
					label: '车头、尾撞到物体（墙、树、物体）',
					onClick: function() {
						$("#type-text").text('车头、尾撞到物体（墙、树、物体）');
					}
				}, {
					label: '车侧面被撞伤',
					onClick: function() {
						$("#type-text").text('车侧面被撞伤');
					}
				}, {
					label: '车顶部被砸伤',
					onClick: function() {
						$("#type-text").text('车顶部被砸伤');
					}
				}, {
					label: '我也说不清',
					onClick: function() {
						$("#type-text").text('我也说不清');
					}
				}, ], [{
					label: '取消',
					onClick: function() {

					}
				}], {
					className: 'custom-classname'
				});
			};


			$scope.surveyPhoto = [{
				desc: "全车45含清晰车牌照", //描述
				descPhotoUrl: "images/car.png", //描述图片地址
				uploading: true,
				process: {
					width: "20%"
				}, //进度
				uploaded: false,
				auditPass: true, //审核是否通过
				auditReturn: "" //退回原因
			}, {
				desc: "车辆损失部位",
				descPhotoUrl: "images/car.png",
				uploading: true,
				process: {
					width: "0%"
				},
				uploaded: false,
				auditPass: false,
				auditReturn: "“碰撞物体”拍摄不清晰，请重新拍摄上传"

			}, {
				desc: "碰撞物体",
				descPhotoUrl: "images/car.png",
				uploading: true,
				process: {
					width: "40%"
				},
				uploaded: false
			}, {
				desc: "车架号",
				descPhotoUrl: "images/car.png",
				uploading: false,
				process: {
					width: "0%"
				},
				uploaded: false
			}];

			$scope.certPhoto = [{
				desc: "行驶证", //描述
				descPhotoUrl: "images/cert.png", //描述图片地址
				uploading: true,
				process: {
					width: "20%"
				}, //进度
				uploaded: false,
				auditPass: true, //审核是否通过
				auditReturn: "" //退回原因
			}, {
				desc: "驾驶证",
				descPhotoUrl: "images/cert.png",
				uploading: true,
				process: {
					width: "0%"
				},
				uploaded: false,
				auditPass: false,
				auditReturn: "“碰撞物体”拍摄不清晰，请重新拍摄上传"

			}, {
				desc: "被保险人银行卡",
				descPhotoUrl: "images/cert.png",
				uploading: true,
				process: {
					width: "40%"
				},
				uploaded: false
			}, {
				desc: "被保险人身份证(正面)",
				descPhotoUrl: "images/cert.png",
				uploading: false,
				process: {
					width: "0%"
				},
				uploaded: false
			}, {
				desc: "被保险人银行卡(反面)",
				descPhotoUrl: "images/cert.png",
				uploading: false,
				process: {
					width: "0%"
				},
				uploaded: false
			}];

			var t = $interval(function() {
				var width = parseInt($scope.surveyPhoto[0].process.width);
				if (width >= 100) {
					$interval.cancel(t);
					t = null;
					$scope.surveyPhoto[0].uploaded = true;
					$scope.surveyPhoto[0].uploading = false;
					return;
				}
				$scope.surveyPhoto[0].process.width = width + 20 + "%";
			}, 1000);


			var t2 = $interval(function() {
				var width = parseInt($scope.surveyPhoto[1].process.width);
				if (width >= 100) {
					$interval.cancel(t2);
					t2 = null;
					$scope.surveyPhoto[1].uploaded = true;
					$scope.surveyPhoto[1].uploading = false;
					return;
				}
				$scope.surveyPhoto[1].process.width = width + 10 + "%";
			}, 1200);
		}
	]);