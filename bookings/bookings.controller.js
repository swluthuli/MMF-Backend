const express = require('express');
const router = express.Router();
const bookingService = require('./booking.service');
const car = require('../cars/car.service')
// routes
router.post('/register/:id', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id&:carid', _delete);

module.exports = router;


function register(req, res, next) {
    console.log(req.params.id);
    car.bookedCar(req.params.id).then(() =>
    bookingService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err)));
}

function getAll(req, res, next) {
    bookingService.getAll()
        .then(bookings => bookings ? res.json(bookings) : res.status(400).json({ message: 'no booking exist' }))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    bookingService.getById(req.cars.sub)
        .then(bookings => bookings ? res.json(bookings) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    bookingService.getById(req.params.id)
        .then(bookings => bookings ? res.json(bookings) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    bookingService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    car.releaseCar(req.params.carid).then(()=>
    bookingService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err)));
}