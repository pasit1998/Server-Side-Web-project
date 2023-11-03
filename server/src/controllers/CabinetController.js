const { Cabinet } = require('../models')

module.exports = {

    // Get all cabinets
    async index(req, res) {
        try {
            const cabinets = await Cabinet.findAll()
            res.send(cabinets)
        } catch (err) {
            res.status(500).send({
                error: 'The cabinets inforgmation was incorrect'
            })
        }
    },

    // Create cabinet
    async create(req, res) {
        try {
            const cabinet = await Cabinet.create(req.body)
            res.send(cabinet.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create cabinet incorrect'
            })
        }
    },

    // Edit cabinet
    async put(req, res) {
        try {
            await Cabinet.update(req.body, {
                where: {
                    id: req.params.cabinetId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update cabinet incorrect'
            })
        }
    },

    // Delete cabinet
    async remove(req, res) {
        try {
            const cabinet = await Cabinet.findOne({
                where: {
                    id: req.params.cabinetId
                }
            })
            if (!cabinet) {
                return res.status(403).send({
                    error: 'The cabinet information was incorrect'
                })
            }
            await cabinet.destroy()
            res.send(cabinet)
        } catch (err) {
            res.status(500).send({
                error: 'The cabinet information was incorrect'
            })
        }
    },

    // Show cabinet by id
    async show(req, res) {
        try {
            const cabinet = await Cabinet.findByPk(req.params.cabinetId)
            res.send(cabinet)
        } catch (err) {
            res.status(500).send({
                error: 'The cabinet information was incorrect'
            })
        }
    }
}


