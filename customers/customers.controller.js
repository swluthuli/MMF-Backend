const express = require('express');
const router = express.Router();
const customerService = require('./customer.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function register(req, res, next) {
    customerService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    customerService.getAll()
        .then(customers => customers ? res.json(customers) : res.status(400).json({ message: 'no customers exist' }))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    customerService.getById(req.customers.sub)
        .then(customers => customers ? res.json(customers) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    customerService.getById(req.params.id)
        .then(customers => customers ? res.json(customers) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    customerService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    customerService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}