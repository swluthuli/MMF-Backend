const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carid:{type: String, required: true},
    car_name: { type: String, required: true },
    year: { type: String, required: true},
    fuel: { type: String, required: true },
    pickup: { type: String,  required: true},
    PickDate:{ type: String, required: true },
    returnLocation: { type: String, required: true },
    returnDate: { type: String, required: true },
    title: { type: String},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    contact_number: { type: String, required: true },
    identity: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Booking', schema);