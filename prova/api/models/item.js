var mongoose = require('mongoose');

module.exports= function() {
    var schema = mongoose.Schema({
        description: {
            type: String,
            required: true
        },
        qty: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true
        }
    });
    
    return mongoose.model('Item', schema);
}