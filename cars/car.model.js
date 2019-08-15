const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    overview: { type: String},
    vehicle: { type: String, required: true },
    price: { type: Number, required: true },
    fuel: { type: String, required: true },
    year: { type: String},
    seats:{ type: String, required: true },
    booked:{type:Boolean, default: false},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Car', schema);