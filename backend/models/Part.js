const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

//nome, o peso, o valor e o tipo (Geral, Interior e Exterior)

const PartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    value: {
        type: Number,      
        required: true
    },
    kind: {
        type: String,       
        required: true,        
    }
}, {
    collection: 'parts',
    timestamps: true
})

module.exports = mongoose.model('Part', PartSchema);