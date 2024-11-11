const { response } = require("express");

const esAdminRol = (req, res = response, next) => {

    if(!req.usuario){
        return res.status(500).json({
            msj: 'Se requiere verificar el rol sin validar el token'
        }) 
    }

    const {rol, nombre } = req.usuario;

    if(rol !== 'Admin'){
        return res.status(401).json({
            msg: `${nombre} no es un administrador -No puedes realizar esta accion`
        })
    }


    next();
}

//al colocar ...roles es como colocar todo lo que nos mande el usuario ahi
const tieneRol = (...roles) => {

    return (req, res = response, next) => {
        //console.log(roles, req.usuario);
        if(!req.usuario){
            return res.status(500).json({
                msj: 'Se requiere verificar el rol sin validar el token'
            }) 
        }

        if(!roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: `Esta accion requiere uno de estos roles ${roles}`
            })
        }

        next()
    } 
}
module.exports = {
    esAdminRol,
    tieneRol
}