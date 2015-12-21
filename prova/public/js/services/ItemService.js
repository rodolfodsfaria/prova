angular.module('cart').factory('Item', function($resource){
    return $resource('/items/:id');
});