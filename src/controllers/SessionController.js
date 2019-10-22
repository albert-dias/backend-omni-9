const User = require('../models/User');
//index, show, store, update, destroy

module.exports = {
    async store(req, res){
        const { email } = req.body;//pega o email no corpo da requisição

        let user = await User.findOne({ email });//busca se o email existe no banco de dados
        
        if (!user){ // caso não exista ele cria o usuario
            user = await User.create({ email });
        }

        return res.json(user);
    }
};