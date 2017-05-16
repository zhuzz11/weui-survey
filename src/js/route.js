/**
 * Created by zhudm on 2017/4/12.
 */

angular.module("ctApp").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when("/", "/route");

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
    $stateProvider
        .state('surveyReport', {
            cache: false,
            url: '/report',
            title: "自助查勘报告",
            templateUrl: 'view/controller/survey_report.html'
        });
    $stateProvider
        .state('caseDetail', {
            cache: false,
            url: '/case/detail',
            title: "案件详情",
            templateUrl: 'view/controller/case_detail.html'
        });
    $stateProvider
        .state('feedback', {
            cache: false,
            url: '/feedback',
            title: "反馈",
            templateUrl: 'view/controller/feedback.html'
        });
    $stateProvider
        .state('route', {
            cache: false,
            url: '/route',
            title: "路由页面",
            templateUrl: 'view/controller/route.html'
        });
}]);