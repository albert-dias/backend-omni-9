const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res){
        const { tech } = req.query;//pega o parametro

        const spots = await Spot.find({ techs: tech }); // busca todos os spots que tenha o parametro

        return res.json( spots );
    },

    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const{ user_id } = req.headers;

        const user = await User.findById(user_id);// busca o usuário pelo id

        if(!user){ //valida se o usuário existe
            return res.status(400).json({ error: "O usuario não existe!"})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),//tranforma as tecnologias em array
            price
        })

        return res.json(spot);
    }
};