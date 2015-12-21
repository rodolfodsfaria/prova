angular.module('cart', ['ngRoute', 'ngResource']).config(function($routeProvider) {
    $routeProvider.when('/items', {
        templateUrl: 'partials/items.html',
        controller: 'ItemsController'
    });
        
    $routeProvider.when('/item/:itemId', {
        templateUrl: 'partials/item.html',
        controller: 'ItemController'
    });
    
    $routeProvider.when('/item', {
        templateUrl: 'partials/item.html',
        controller: 'ItemController'
    });
    
    $routeProvider.when('/', {
        templateUrl: 'partials/items.html',
        controller: 'ItemsController'
    });

});