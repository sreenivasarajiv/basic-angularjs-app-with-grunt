myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state({
            name: '/',
            url: '/',
            templateUrl: 'src/views/home.html',
            controller : 'HomeController'
        })
        .state({
            name : 'home',
            url : '/',
            templateUrl : 'src/views/home.html',
            controller : 'HomeController'
        })
        .state({
            name : 'about',
            url : '/about',
            templateUrl : 'src/views/about.html',
            controller : 'AboutController'
        })
        .state({
            name : 'contact',
            url : '/contact',
            templateUrl : 'src/views/contact.html',
            controller : 'ContactController'
        });

}]);