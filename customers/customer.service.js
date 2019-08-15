const config = require('../config.json');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Customer = db.Customer;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Customer.find();
}

async function getById(id) {
    return await Customer.findById(id);
}

async function create(userParam) {
    const customer = new Customer(userParam);
    await customer.save();
}

async function update(id, userParam) {
    const customer = await Customer.findById(id);

    // validate
    if (!customer) throw 'User not found';

    // copy userParam properties to customer
    Object.assign(customer, userParam);

    await customer.save();
}

async function _delete(id) {
    await Customer.findByIdAndRemove(id);
}