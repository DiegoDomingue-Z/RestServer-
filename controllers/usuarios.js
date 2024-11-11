const { response } = require('express');
const encriptador = require('bcryptjs')
const Usuario = require('../models/usuario');
const { login } = require('./login');


const usuariosConsulta =  async (req, res) => {
    try {

        const {limite = 5, desde = 0} = req.query;
        //en sequelize para aplicar condiciones debe llevar el nombre where
        const where = { estado: 'Activo'}

        //las queris se resiven como string entonces debemos convertilo a numero
        const limit = parseInt(limite);
        const offset = parseInt(desde);
        //estamos pasando directamente el limite de usuarios que queramos obtener
        
        //const usuarios = await Usuario.findAll({where ,limit, offset}) // Realiza la consulta a la tabla usuarios
        //const total = await Usuario.count({where})

        //la funcion promise.all nos permite juntar todas las promesas para que se 
        //ejecuten en una sola 
        //colocamos el await para que se espere a que se resuelvan las dos promesas 
        //si una falla falla todo
        const [tolal, usuarios] =  await Promise.all([
            Usuario.count({where}),
            Usuario.findAll({where ,limit, offset})
            
        ]) 
        
        res.json({
            Total_de_Usuarios_activos: tolal,
            Usuaros: usuarios
        }); // Devuelve los usuarios en formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' }); // Manejo de errores
    }
}


const usuarioId = async (req, res) => {
    try{

        let { id } = req.params;

        let resultado = await Usuario.findByPk(id);
        res.json(resultado);
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}


const crearUsuario = async (req, res) => {;
    try{


        let {nombre, correo, contrasena, img, rol, estado, google = 'false'} = req.body
       
        //encriptar la contraseña 
        //numero de vueltas en la que se va encriptar la contraseña ente mas vueltas mas encriptada
        let vueltas = encriptador.genSaltSync(10);
        let contaseñaEncriptada = encriptador.hashSync(contrasena, vueltas)

        console.log("Contraseña original:", contrasena);
        console.log("Contraseña encriptada:", contaseñaEncriptada);

        //guardando en la base de datos
        let resultado = await Usuario.create({nombre, correo, contrasena: contaseñaEncriptada, img, rol, estado, google});
        res.json(resultado);
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al crear el usuario'});
    }
}



const actualizarUsuario = async (req, res) => {
    try{
        let { idss } = req.params;
        let { contrasena,  google, img, ...resto } = req.body;

       let idSeleccionado = await Usuario.findByPk(idss);


        if(idSeleccionado){
            if(contrasena){
                let vueltas = encriptador.genSaltSync(10);
                //le estamos añadiendo la contraseña encriptada al objeto resto en una nueva propiedad llamada contrasena.
                resto.contrasena = encriptador.hashSync(contrasena, vueltas)
            }
           await Usuario.update(resto, {where: {id: idss}});
            res.json({
                ms: `usuario ${idss} actualizado`,
                usuario: resto
            })
        }else{
            res.json({
                mg: `El ${idss} no existe en la db`
            })
        }
        console.log(resto)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}


const eliminarUsuario = async (req, res) => {
    try{

        let { idss } = req.params;
        const nuevoEstado = 'Inactivo';
        const usuarioAutenticado = req.usuario;

       //const uid = req.uid;

        //usuario autenticado
        
        //Recupera un solo registro que coincida con los criterios especificados.
        // o las condiciones
        let resultado = await Usuario.findOne({
            where: {
                id: idss,
                estado: 'Activo'
            }
        });

        if(resultado){
            //el udate resive dos paranetros que se va actualizar y de cual se va 
            //actualizar
            await Usuario.update({estado: nuevoEstado}, {where: {id:idss}})
            res.json({
                usuario: idss,
                mensaje: 'Usuario eliminado',
                usuarioAutenticado
            });
        }else{
            res.json({
                mensaje: `El id: ${idss} no se encotro en db o no se encuentra 'ACTIVO' `
            })
        }
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}
 

//elimina el usuario por completo de la base de datos 
/*const eliminarUsuario = async (req, res) => {
    try{

        let { id } = req.params;

        let resultado = await Usuario.destroy({ where: { id } })
        // "Elimina donde el campo id sea igual al id que recibimos."
        res.json({
            usuario: id,
            mensaje: 'Usuario eliminado'
        });
        console.log(resultado)
    }catch(error){
        console.log(error);
        res.json({error: 'al obtener el usuario'});
    }
}*/




module.exports = {
    usuarioId,
    crearUsuario,
    usuariosConsulta,
    actualizarUsuario,
    eliminarUsuario,
} 