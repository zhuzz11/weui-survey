angular.module("ctApp", ['ui.router'])
    .run([
        "apiRequest",
        "$rootScope",
        "$state",
        function(apiRequest, $rootScope, $state) {
            apiRequest.init();

            //      $rootScope.pageTitle = "";

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                $rootScope.pageTitle = toState.title ? toState.title : fromState.title;
                document.title = $rootScope.pageTitle;
                $(window).unbind('scroll');
            });


            $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams) {

                });
        }
    ]);

Date.prototype.format = function(format) {
    format = format || "yyyy-MM-dd";
    var args = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
        var n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
};

Date.prototype.dateDiff = function(date) {
    var left = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var right = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return parseInt((left - right) / 1000 / 60 / 60 / 24);
};

$.fn.autosize = function() {
    $(this).height('0px');
    var setheight = $(this).get(0).scrollHeight;
    var p = parseInt($(this).css("padding"));
    setheight = setheight - p * 2;
    if ($(this).attr("_height") != setheight){
        $(this).height(setheight + "px").attr("_height", setheight);
    }
    else{
        $(this).height($(this).attr("_height") + "px");
    }
};