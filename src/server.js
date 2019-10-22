const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://albertdias:MariaLiz230314@cluster0-fxgdy.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PUT, DELETE

// req.query =  Acessar a query params{ para filtros }
// req.params = Acessar route params { para edição, delete }
// req.body = Acessar corpo da requisição { para criação e edição }
//mongodb+srv://<username>:<password>@cluster0-fxgdy.mongodb.net/test?retryWrites=true&w=majority
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads' )));
app.use(routes);

app.listen(3333);   