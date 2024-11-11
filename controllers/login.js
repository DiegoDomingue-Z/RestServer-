const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req , res = response) => {
        
    try{

        let { correo,contrasena} = req.body;
        

        //verificar si el email existe
        console.log(correo);
        console.log(contrasena);
        const usuario = await Usuario.findOne({where: {correo}});
        if(!usuario){
            return res.status(400).json({
                mensaje: 'El correo no es valido o no se encuentra en db'
            })
        }

        // si el estado esta activo 
        if(usuario.estado === 'Inactivo'){
            return res.status(400).json({
                mensaje: 'El correo esta inactivo o no se encuentra en la db'
            })
        }

        //verificamos contraseña
        //aqui resivimos el pasword y lo compramos con la contraseña de la base de datos
        //esto devuelve un voleano si hace mach
        

        // Verificar la contraseña
        const validarContrasena = bcrypt.compareSync(contrasena, usuario.contrasena);
        console.log("Hash de la base de datos:", usuario.contrasena);
        console.log("Contraseña ingresada:", contrasena);
        console.log("Resultado de la validación:", validarContrasena);
        
        if(!validarContrasena) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }


        //generar jwt 
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        })
           // {mes:'Usuario encontrado')

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Error fatal en el server',
        })
        
    }


}

module.exports = {
    login
}