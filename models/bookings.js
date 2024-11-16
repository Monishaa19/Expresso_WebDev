const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    destination: { type: Schema.Types.ObjectId, ref: 'Destination', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
