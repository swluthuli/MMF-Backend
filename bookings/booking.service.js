const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Booking = db.Booking;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Booking.find();
}

async function getById(id) {
    return await Booking.findById(id);
}

async function create(userParam) {
    const booking = new Booking(userParam);
    await booking.save();
}

async function update(id, userParam) {
    const booking = await Booking.findById(id);

    // validate
    if (!booking) throw 'User not found';

    // copy userParam properties to user
    Object.assign(user, userParam);

    await Booking.save();
}

async function _delete(id) {
    await Booking.findByIdAndRemove(id);
}