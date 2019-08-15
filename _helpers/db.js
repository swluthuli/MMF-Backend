const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true }).catch(error => console.log(error));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Customer: require('../customers/customer.model'),
    Car: require('../cars/car.model'),
    Booking: require('../bookings/booking.model')
};