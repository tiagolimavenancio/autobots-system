const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// nome, a descrição e as peças
// haverá uma relação peças e simulação

const SimulatorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    collection: 'simulations',
    timestamps: true
})

module.exports = mongoose.model('Simulator', SimulatorSchema)



