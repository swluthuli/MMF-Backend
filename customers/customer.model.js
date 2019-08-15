const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birth_date: { type: Date, required: true },
    driversLicense: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    gender:{ type: String, required: true },
    address:{ type: String, required: true },
    contact:{ type: Number, required: true },
    city:{type: String, required: true},
    identity: {type: String, required: true, unique: true},
    country:{type: String, required: true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Customer', schema);