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
				left: {
					desc: "全车45含清晰车牌照", //描述
					descPhotoUrl: "images/car.png", //描述图片地址
					uploading: true,
					process: {
						width: "20%"
					}, //进度
					uploaded: false,
					auditPass: true,//审核是否通过
					auditReturn: ""//退回原因
				},
				right: {
					desc: "车辆损失部位",
					descPhotoUrl: "images/car.png",
					uploading: true,
					process: {
						width: "0%"
					},
					uploaded: false,
					auditPass: false,
					auditReturn: "“碰撞物体”拍摄不清晰，请重新拍摄上传"
				}
			}, {
				left: {
					desc: "碰撞物体",
					descPhotoUrl: "images/car.png",
					uploading: true,
					process: {
						width: "40%"
					},
					uploaded: false
				},
				right: {
					desc: "车架号",
					descPhotoUrl: "images/car.png",
					uploading: false,
					process: {
						width: "0%"
					},
					uploaded: false
				}
			}];

			var t = $interval(function(){
				var width = parseInt($scope.surveyPhoto[0].left.process.width);
				if(width >= 100){
					$interval.cancel(t);
					t = null;
					$scope.surveyPhoto[0].left.uploaded = true;
					$scope.surveyPhoto[0].left.uploading = false;
					return;
				}
				$scope.surveyPhoto[0].left.process.width = width + 20 + "%";
			},1000);


			var t2 = $interval(function(){
				var width = parseInt($scope.surveyPhoto[0].right.process.width);
				if(width >= 100){
					$interval.cancel(t2);
					t2 = null;
					$scope.surveyPhoto[0].right.uploaded = true;
					$scope.surveyPhoto[0].right.uploading = false;
					return;
				}
				$scope.surveyPhoto[0].right.process.width = width + 10 + "%";
			},1200);
		}
	]);