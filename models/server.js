const express = require('express');
require('dotenv').config();
require('colors')
const cors = require('cors');
const { db } = require('../db/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRutas = '/api/usuarios/';
        this.login = '/api/login';

        this.conectarBD();

        this.middlewares();
        this.rutas();
    }

    middlewares(){

        //uso de los cors
        this.app.use(cors());

        //lectura y parceo
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    async conectarBD() {
        await db();
    }


    //metodo de las rutas
    rutas(){
        this.app.use(this.usuariosRutas, require('../routes/usuarios'))
        this.app.use(this.login, require('../routes/login'))
    }
 
    //metodo del puerto 
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', `${ this.port}`.red)
        });
    }

}
module.exports = Server;