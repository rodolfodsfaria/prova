var ID_ITEM_INC = 1;

var items = [
    {_id: 1, description: 'PS4', qty:'1', price: '399.00'},
    {_id: 2, description: 'Street Fight V', qty:'2', price: '59.99'},
];

module.exports = function() {
    var controller = {};
    controller.listaItems = function(req, res) {
        res.json(items);
    };
    
    controller.obtemItems = function(req, res) {
        var idItem = req.params.id;
        var item = items.filter(function(item) {
            return item._id == idItem;
        })[0];
        item ?
            res.json(item) : 
            res.status(404).send('Item not found');
    };
    
    controller.removeItem = function(req, res) {
        var idItem = req.params.id;
        items = items.filter(function(item) {
            return item._id != idItem;
        });
        res.status(204).end();
    };
    
    controller.salvaItem = function (req, res) {
        var item = req.body;
        item = item._id ?
            atualiza(item) :
            adiciona(item);
        res.json(item);
    };
        function adiciona(itemNovo) {
            itemNovo._id = ++ID_ITEM_INC;
            items.push(itemNovo);
            return itemNovo;
    }
        function atualiza(itemAlterar) {
            items = items.map(function(item) {
                if(item._id == itemAlterar._id) {
                    item = itemAlterar;
                }
            return item;
        });
        return itemAlterar;
    }
    
    return controller;
}