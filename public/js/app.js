var app = angular.module('mean', ['ui.router', 'geolocation']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })

        .state('item1', {
            url: '/item1',
            templateUrl: 'item1.html'
        })
        .state('item2', {
            url: '/item2',
            templateUrl: 'item2.html'
        })
        .state('item3', {
            url: '/item3',
            templateUrl: 'item3.html'
        })
        .state('item4', {
            url: '/item4',
            templateUrl: 'item4.html'
        })
});
