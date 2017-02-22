angular.module('app', ['ngComponentRouter', 'ngRoute', 'app.directives'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl: 'app.module.html',
        $routeConfig: [{
            path: '/',
            name: 'Index',
            component: 'index',
            useAsDefault: true
        }, {
            path: '/surgury/:doctorId',
            name: 'Surgury',
            component: 'surgury'
        }]
    });