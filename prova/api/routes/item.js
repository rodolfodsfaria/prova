module.exports = function(app) {
    var controller = app.controllers.item;
    app.route('/items').get(controller.listaItems).post(controller.salvaItem);
    app.route('/items/:id').get(controller.obtemItems).delete(controller.removeItem);
    
}