const mongoose = require('mongoose');

//Criando o schema do banco de dados
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //buscando relacionamento com tb user
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //buscando relacionamento com tb spot
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);