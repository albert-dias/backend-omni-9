const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers; //busca no cabeçalho
        const { spot_id } = req.params; //busca nos parametros da url
        const { date } = req.body; //corpo da requisição

        //cria o reserva
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        //populando relaciomento
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};