angular.module('cart').controller('ItemController', function($scope, $routeParams, Item){
    
    if($routeParams.itemId) {
        Item.get({id: $routeParams.itemId}, 
                function(item){
                    $scope.item = item;
                 },
                function(erro){
                    $scope.mensagem = {
                        texto: 'Item not found'
                    };
                 }
                );
    }else{
        $scope.item = {};
    }
    
    $scope.item = new Item();
    
    $scope.salva = function() {
      $scope.item.$save()
        .then(function() {
          $scope.mensagem = { texto: 'Item saved.' };
          $scope.item = new Item();
      })
      .catch(function(erro){
        $scope.mensagem = { texto: 'Erro'};
      })
    };
});
