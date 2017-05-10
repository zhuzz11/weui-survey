angular.module('ctApp')
    .directive("carArea", ["$apis", "$timeout", function($apis, $timeout) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "view/directive/car_area.html",
            scope: {
                prefix: "=",
                send:"&"
            },
            link: function(scope, element, attrs, ctrl) {

                var areas = ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀", "豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂", "湘", "赣", "闽", "陕", "甘", "宁", "蒙", "津", "贵", "云", "桂", "琼", "青", "新", "藏", "台"];
                scope.areaList = [];
                scope.prefix = "粤"; //默认粤

                var initAreaList = function() {
                    for (var i = 0; i < areas.length; i++) {
                        scope.areaList.push({
                            name: areas[i]
                        });
                    }
                };
                initAreaList();

                var reg_CAR = /^[a-zA-Z]{1}[a-zA-Z0-9]{4}[a-zA-Z0-9挂学警港澳]{1}$/;
                weui.form.checkIfBlur('#car-area-form', {
                    regexp: {
                        CAR: reg_CAR
                    }
                });

                scope.areaShow = false;

                scope.openArea = function() {
                    scope.areaShow = true;
                };

                scope.closeArea = function() {
                    var divs = $(".area-keyboard").find("div");
                    $(divs[0]).addClass("weui-animate-fade-out");
                    $(divs[1]).addClass("weui-animate-slide-down");
                    $timeout(function() {
                        scope.areaShow = false;
                    }, 350);
                };

                scope.choiceItem = function(item) {
                    scope.closeArea();
                    scope.prefix = item.name;
                };

                scope.commit = function(){
                    var carNo = $("#car-area-input").val();
                    if(carNo == ""){
                        weui.topTips('请输入车牌号');
                        return;
                    }
                    if (reg_CAR.test(carNo)) {
                        scope.send({carNo:carNo});
                    }else{
                        weui.topTips('车牌号格式不正确');
                    }
                };

            }
        };
    }]);