//los helpers son validaciones con las bases de datos
const Roles = require('../models/rol');
const Usuario = require('../models/usuario');


const rolValido = async(rol = '') => {
    const existeRol = await Roles.findOne({where: {rol}})
    if(!existeRol){
        //esto no revienta mi aplicacion avianta un error personalizado
        //que va ser atrapado en el custom  
        throw new Error(`El rol ${rol} no esta en la db`)
    }
}

//verificar si el correo existe 
//findOne es de sequelice
//Busca el primer registro en la base de datos que coincide con los parámetros proporcionados en el where(donde)
//correo que resivimos sea igual al correo que esta en la base de datos

const emailExistee = async(correo = '') => {
  const emailExiste = await Usuario.findOne({where: {correo}});
   if(emailExiste){
      throw new Error(`El email ${correo} ya existe`)
   }
} 

const existeId = async(id = '') => {
    const idesta = await Usuario.findOne({where: {id}});
     if(!idesta){
        throw new Error(`El ${id} no se encuentra reguistrado`)
     }
} 
  

module.exports = {
    rolValido,
    emailExistee,
    existeId
}