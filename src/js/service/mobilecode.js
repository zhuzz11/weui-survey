angular.module('ctApp').factory("mobilecode", [
    "$apis",
    function($apis) {

        var send = function(body,success,fail) {
            $apis.getCode.send({
                loaddingTitle: "正在发送...",
                body: body
            }).then(function(data) {
                if(data && data.resultCode == "0000"){
                    weui.toast('已发送成功', 3000);
                    if(angular.isFunction(success)){
                        success(data);
                    }
                }else{
                    weui.topTips(data && data.resultMsg || "服务异常");
                    if(angular.isFunction(fail)){
                        fail();
                    }
                }
            }, function(err) {
                weui.topTips('发送验证码失败，请重新获取');
                if(angular.isFunction(fail)){
                    fail(err);
                }
            });
        };

        return {
            send: send
        };
    }

]);