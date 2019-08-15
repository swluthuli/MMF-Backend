const express = require('express');
const router = express.Router();
const carService = require('./car.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function register(req, res, next) {
    carService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    carService.getAll()
        .then(cars => cars ? res.json(cars) : res.status(400).json({ message: 'no customers exist' }))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    carService.getById(req.cars.sub)
        .then(cars => cars ? res.json(cars) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    carService.getById(req.params.id)
        .then(cars => cars ? res.json(cars) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    carService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    carService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}