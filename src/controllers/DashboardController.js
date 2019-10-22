const Spot = require('../models/Spot');

module.exports = {
    async show (req, res) {
        const { user_id } = req.headers; //busca o id no header
        
        //busca todos os spots criados pelo usuario da session
        const spots = await Spot.find({ user: user_id }); 

        return res.json(spots);
    }
}