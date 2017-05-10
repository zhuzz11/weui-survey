angular.module("ctApp").factory("WXCodeService", [
    function() {
        var service = {};

        service.saveWXCode = function(code) {
            localStorage.setItem("wxCode", code);
        };

        service.getWXCode = function() {
            return localStorage.getItem("wxCode");
        };

        service.saveOrder = function(obj) {
            localStorage.setItem("agentOrder",JSON.stringify(obj));
        };

        service.getOrder = function() {
            return JSON.parse(localStorage.getItem("agentOrder"));
        };

        service.saveOrderTemp = function(obj){
            sessionStorage.setItem("orderTemp",JSON.stringify(obj));
        };

        service.getOrderTemp = function(){
            return JSON.parse(sessionStorage.getItem("orderTemp"));
        };

        service.removeOrderTemp = function(){
            sessionStorage.removeItem("orderTemp");
        };

        service.saveLocationTemp = function(obj){
            sessionStorage.setItem("location",JSON.stringify(obj));
        };

        service.getLocationTemp = function(){
            return JSON.parse(sessionStorage.getItem("location"));
        };

        service.removeLocationTemp = function(){
            sessionStorage.removeItem("location");
        };

        service.saveQueryParams = function(obj){
            sessionStorage.setItem("querys",JSON.stringify(obj));
        };

        service.getQueryParams = function(){
            return JSON.parse(sessionStorage.getItem("querys"));
        };

        service.removeQueryParams = function(){
            sessionStorage.removeItem("querys");
        };

        service.clearAll = function() {
            localStorage.removeItem("wxCode");
            localStorage.removeItem("agentOrder");
        };

        return service;
    }
]);