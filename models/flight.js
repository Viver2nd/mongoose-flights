const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: String,
    airport: { type: String, default: 'DEN' },
    flightNo: Number,
    departs: { type: Date,  },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);