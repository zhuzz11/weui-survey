angular.module('ctApp').factory("apiRequest", [
    "$q",
    "$http",
    "$apis",
    "loading",
    "WXCodeService",
    function($q, $http, $apis, loading, WXCodeService) {

        var serverhost = "";
        var showLoadding = function(isShowLoadding, loaddingTitle) {
            if (isShowLoadding == undefined || isShowLoadding) {
                loading.show(loaddingTitle);
            }
        };

        var hideLoadding = function(isShowLoadding) {
            if (isShowLoadding == undefined || isShowLoadding) {
                loading.hide();
            }
        };

        var formatArrayStr = function(array) {
            if (array) {
                angular.forEach(array, function(item, key) {
                    if (key != "$$hashKey") {
                        var value = item;
                        var type = typeof value;
                        if (type === "object") {
                            if (value === undefined || value == null) {
                                array[key] = "";
                            } else {
                                array[key] = formatArrayStr(item);
                            }
                        } else {

                            if ((type === "string") || (type === "number")) {
                                value = value;
                            }
                            if (value === undefined || value === null) {
                                value = "";
                            }

                            array[key] = value;
                        }
                    }
                });
                return array;
            }
        };

        var send = function(obj) {
            if (typeof obj !== "object" || !obj) {
                obj = {};
            }
            var params = obj.params;
            var body = obj.body;
            var loaddingTitle = obj.loaddingTitle;
            var isShowLoadding = obj.isShowLoadding;
            var key = obj.key;

            var varThis = this;
            var defer = $q.defer();
            var url = (varThis.host ? varThis.host : serverhost) + makeApiUrl(varThis.url, params);

            var req = {
                method: varThis.method,
                url: url,
                ContentType: "application/json;charset=UTF-8",
                headers: {
                    wxCode: WXCodeService.getWXCode()
                },
                data: {}
            };

            var data = {};
            if (body) {
                data = formatArrayStr(body);
            }
            if(varThis.serviceName){
                req.data.data = JSON.stringify(data);
                req.data.timestamp = Date.parse(new Date()) / 1000;
                req.data.serviceName = varThis.serviceName;
            }else{
                req.data = data;
            }

            showLoadding(isShowLoadding, loaddingTitle);

            $http(req).success(function(data, status, headers, config, statusText) {
                hideLoadding(isShowLoadding);

                var ret = data;
                key && (ret = {
                    data: data,
                    key: key
                });
                defer.resolve(ret);
            }).error(function(data, status, headers, config, statusText) {
                hideLoadding(isShowLoadding);

                var ret = data;
                key && (ret = {
                    data: data,
                    key: key
                });
                defer.reject(ret);
            });
            return defer.promise;
        };

        var more = function(apis) {
            var defer = $q.defer();

            var resutlt = {};

            var len = 0,
                round = 0;
            angular.forEach(apis, function(item) {
                len++;
            });

            angular.forEach(apis, function(item, key) {
                $apis[key].send({
                    param: item.params,
                    body: item.body,
                    key: key
                }).then(
                    function(ret) {
                        resutlt[ret.key] = ret.data;
                        if (++round === len) {
                            defer.resolve(resutlt);
                        }
                    },
                    function(ret) {
                        resutlt[ret.key] = ret.data;

                        if (++round === len) {
                            defer.reject(resutlt);
                        }
                    }
                );
            });

            return defer.promise;
        };

        var makeApiUrl = function(url, apiParams) {
            var api = url.split("?");
            var apiurl = api[0];
            var params = api[1];
            for (var i in apiParams) {
                if (params) {
                    params = params.replace("{" + i + "}", escape(apiParams[i]));
                }
                if (apiurl) {
                    apiurl = apiurl.replace("{" + i + "}", escape(apiParams[i]));
                }
            }
            if (params && params.length > 0) {
                apiurl += "?" + params;
            }
            return apiurl;
        };

        var service = {
            init: function() {
                for (var i in $apis) {
                    $apis[i].send = send;
                }

                $apis["more"] = more;
            }
        };

        return service;
    }
]);