const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Car = db.Car;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    bookedCar,
    releaseCar
};


async function getAll() {
    return await Car.find({ "booked": { $eq: false } });
}

async function getById(id) {
    return await Car.findById(id);
}

async function create(userParam) {
    const car = new Car(userParam);
    await car.save();
}

async function update(id, carParam) {
    const car = await Car.findById(id);

    // validate
    if (!car) throw 'Car not found';

    // copy userParam properties to user
    Object.assign(car, carParam);

    await car.save();
}
async function bookedCar(id) {
    const car = await Car.findById(id);
    console.log(car);
    if(car.booked == true) throw 'car is already booked';
    await Car.update({_id:id}, {$set:{booked: true}});
}
async function releaseCar(id) {
    const car = await Car.findById(id);
    console.log(car);
    if(car.booked == false) throw 'car is already returned';
    await Car.update({_id:id}, {$set:{booked: false}});
}
async function _delete(id) {
    await Car.findByIdAndRemove(id);
}