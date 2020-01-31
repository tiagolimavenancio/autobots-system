/** 
 *  --- Boas Práticas ---
 * Os 5 métodos fundamentais no Controller. Só podem ter esse métodos. 
 * INDEX: Uma lista daquele recurso.
 * SHOW: Retornar um único daquele recurso.
 * STORE: Criar um recurso.
 * UPDATE: Atualizar um recurso.
 * DELETE: Excluir um recurso.
*/

const Part = require('../models/Part');

module.exports = {

    async index(req, res) {
        const parts = await Part.find()
        return res.json(parts);
    },

    async store(req, res) {
        const part = await Part.create(req.body)

        if(!part) {
            return res.status(400).json({ error: 'Part cannot be saved.' });
        }

        return res.json(part);
    },

    async show(req, res) {
        const part = await Part.findById(req.params.id);

        if(!part) {
            return res.status(400).json({ error: 'Part does not exists.' });
        }

        return res.json(part);
    },


    async update(req, res) {
        const part = await Part.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });

        if(!part) {
            return res.status(400).json({ error: 'Part cannot be updated.' });
        }

        return res.json(part);
    },

    async delete(req, res) {
        const data = await Part.findByIdAndRemove(req.params.id);
        
        if(!data) {
            return res.status(400).json({ error: 'Failed to remove.' });
        }

        return res.status(200).json({ msg: data })
    },
}