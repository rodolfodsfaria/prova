angular.module('cart').controller('ItemsController', function($scope, Item){
    
    $scope.items = [];
    
    $scope.filtro ='';
    
    $scope.mensagem = {texto: ''};
    
    function buscaItems() {
        Item.query(
            function(items) {
                $scope.items = items;
                $scope.mensagem ={};
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Erro'
                };
            }
           );
    }
    buscaItems();
    
    $scope.remove = function(item) {
        Item.delete({id: item._id},
            buscaItems,
            function(erro){
                $scope.mensagem = {
                    texto: 'Erro'
                };    
            console.log(erro);
            }
        );
    };
    
});