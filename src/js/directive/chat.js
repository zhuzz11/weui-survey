angular.module('ctApp')
    .directive("chat", ["$apis", function(confirmService) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "view/directive/chat.html",
            scope: {
                chat: "="
            },
            link: function(scope, element, attrs, ctrl) {
                scope.chatRecords = [{
                    userType: 1,
                    msgType: 1,
                    text: "你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样",
                    time: "09-21 09:24"
                }, {
                    userType: 2,
                    msgType: 1,
                    text: "不错你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样",
                    time: "09-21 09:24"
                }, {
                    userType: 1,
                    msgType: 1,
                    text: "没有什么意见吗？你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样",
                    time: "09-21 09:24"
                }, {
                    userType: 1,
                    msgType: 1,
                    text: "说说看，不要紧",
                    time: "09-21 09:24"
                }, {
                    userType: 2,
                    msgType: 1,
                    text: "想法十分好",
                    time: "09-21 09:24"
                }, {
                    userType: 1,
                    msgType: 1,
                    text: "哟，不错",
                    time: "09-21 09:24"
                }, {
                    userType: 1,
                    msgType: 1,
                    text: "谢谢你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样",
                    time: "09-21 09:24"
                }, {
                    userType: 2,
                    msgType: 1,
                    text: "你做的很好你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样你看这个怎么样",
                    time: "09-21 09:24"
                }, {
                    userType: 2,
                    msgType: 1,
                    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    time: "09-21 09:24"
                }, {
                    userType: 1,
                    msgType: 2,
                    text: "",
                    voiceId: "12324",
                    voiceSecond: 12,
                    time: "09-21 09:24"
                }];

                scope.openChat = function() {
                    scope.onChat = true;
                    setTimeout(function() {
                        $('.chat-content').scrollTop(100000);
                    }, 100);
                };

                scope.closeChat = function() {
                    scope.onChat = false;
                };

                var websocket = null;

                /*//判断当前浏览器是否支持WebSocket
                if ('WebSocket' in window) {
                    websocket = new WebSocket("ws://10.104.9.104:8080/endpointChat");
                } else {
                    alert('Not support websocket');
                }

                //连接发生错误的回调方法
                websocket.onerror = function() {
                    //setMessageInnerHTML("error");
                };

                //连接成功建立的回调方法
                websocket.onopen = function(event) {
                    //setMessageInnerHTML("open");
                };

                //接收到消息的回调方法
                websocket.onmessage = function(event) {
                    setMessageInnerHTML(event.data);
                };

                //连接关闭的回调方法
                websocket.onclose = function() {
                    //setMessageInnerHTML("close");
                };

                //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
                window.onbeforeunload = function() {
                    websocket.close();
                };

                //将消息显示在网页上
                function setMessageInnerHTML(innerHTML) {
                    scope.chatRecords.push({
                        userType: 1,
                        text: innerHTML,
                        time: new Date().format("MM-dd hh:mm")
                    });
                }

                //关闭连接
                function closeWebSocket() {
                    websocket.close();
                }*/

                scope.textChat = true;

                scope.changeChatType = function() {
                    scope.textChat = !scope.textChat;
                    return;
                    if (scope.textChat) { //切换录音，首先要用户授权
                        if (!localStorage.rainAllowRecord || localStorage.rainAllowRecord !== 'true') {
                            wx.startRecord({
                                success: function() {
                                    scope.textChat = false;
                                    localStorage.rainAllowRecord = 'true';
                                    wx.stopRecord();
                                },
                                cancel: function() {
                                    scope.textChat = true;
                                },
                                fail: function() {
                                    scope.textChat = false;
                                    scope.$apply();
                                    alert("录音目前不可用");
                                }
                            });
                        }
                    } else {
                        scope.textChat = !scope.textChat;
                    }
                };

                scope.textValue = "";
                //发送消息
                scope.send = function() {
                    if (scope.textValue) {

                        scope.chatRecords.push({
                            userType: 1,
                            msgType: 1,
                            text: scope.textValue,
                            time: new Date().format("MM-dd hh:mm")
                        });
                        scope.textValue = "";
                        $(".text-input").focus();
                        $(".text-input").css("height","20px");
                        setTimeout(function() {
                            $('.chat-content').scrollTop(100000);
                        }, 100);
                    } else {
                        alert("请输入内容");
                    }

                };

                var t, t2;
                var loading = null;
                var cancelTimeout = function() {
                    if (t) {
                        clearTimeout(t);
                        t = null;
                    }
                    if (t2) {
                        clearInterval(t2);
                        t2 = null;
                    }
                };

                var voiceId = null,
                    voiceSecond = 0;
                $(".voice-input")[0].addEventListener('touchstart', function(e) {
                    voiceId = null;
                    voiceSecond = 0;
                    var self = this;
                    $(self).css("backgroundColor", "#ddd");
                    console.log("touch");
                    console.log(this);
                    t = setTimeout(function() {
                        $(self).val("松开 结束");
                        loading = weui.loading("正在录音..", {
                            className: 'voice-loading'
                        });
                        //这里开始录音
                        voiceId = "555";
                        t2 = setInterval(function() {
                            voiceSecond++;
                        }, 1000);
                    }, 500);
                    e.preventDefault();
                    return false;
                });

                $(".voice-input")[0].addEventListener('touchend', function(e) {
                    $(this).css("backgroundColor", "#f8f8f8");
                    cancelTimeout();
                    //这里判断并且结束录音与发送录音
                    if (voiceId) {
                        scope.chatRecords.push({
                            userType: 1,
                            msgType: 2,
                            text: "",
                            voiceId: voiceId,
                            voiceSecond: voiceSecond,
                            time: new Date().format("MM-dd hh:mm")
                        });
                        scope.$apply();
                        console.log("add");
                    }
                    setTimeout(function() {
                        $('.chat-content').scrollTop(100000);
                    }, 100);
                    loading.hide();
                    $(this).val("按住 说话");
                    console.log("touch end");
                    e.preventDefault();
                    return false;
                });

                scope.playVoice = function(id) {
                    alert("播放语音" + id);
                };


                $(".text-input").bind("keydown keyup", function() {
                    $(this).autosize();
                }).show();
            }
        };
    }]);