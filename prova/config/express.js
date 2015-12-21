var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    app.set('port', 8080);
    
    //Middleware
    app.use(express.static('./public')); 
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    //Carregamentos de rotas
    load('models', {cwd:'api'}).then ('controllers').then('routes').into(app);
    return app;
}