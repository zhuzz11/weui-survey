/**
 * Created by zhudm on 2017/4/12.
 */

angular.module("ctApp").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when("/", "/survey");

    $stateProvider
        .state('attention', {
            cache: false,
            url: '/attention',
            title: "关注公众号",
            templateUrl: 'view/controller/attention.html'
        });

    $stateProvider
        .state('identify', {
            cache: false,
            url: '/identify',
            title: "自助查勘服务",
            templateUrl: 'view/controller/identify_car.html'
        });
    $stateProvider
        .state('survey', {
            cache: false,
            url: '/survey',
            title: "自助查勘",
            templateUrl: 'view/controller/survey.html'
        });
}]);