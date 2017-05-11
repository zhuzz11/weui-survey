angular.module("ctApp")
	.controller("surveyEdit", [
		"$scope",
		"$state",
		"$apis",
		"$timeout",
		function($scope, $state, $apis, $timeout) {

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
					process: 0, //进度
					uploaded: false
				},
				right: {
					desc: "车辆损失部位", //描述
					descPhotoUrl: "images/car.png", //描述图片地址
					uploading: false,
					process: 0, //进度
					uploaded: false
				}
			}, {
				left: {
					desc: "碰撞物体", //描述
					descPhotoUrl: "images/car.png", //描述图片地址
					uploading: true,
					process: 0, //进度
					uploaded: false
				},
				right: {
					desc: "车架号", //描述
					descPhotoUrl: "images/car.png", //描述图片地址
					uploading: false,
					process: 0, //进度
					uploaded: false
				}
			}];
		}
	]);