const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { login } = require('../controllers/login');
const Usuario = require('../models/usuario');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');
    

    if(!token){
        return res.status(401).json({
            msj: 'Necesitas el toker para realizar esta accion'
        })
    }

    try{

        const { uid } =   jwt.verify(token, process.env.secretOrPrivateKey);

        const usuario = await Usuario.findByPk(uid);

        //aqui extraemos el uid que viene en el token  y la vamos a guardar en la request
        req.usuario = usuario; 

        next()

    }catch(err){

        console.log(token)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }


}

module.exports = {
    validarJWT
}