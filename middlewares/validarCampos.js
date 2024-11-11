const { validationResult } = require('express-validator');

//si el middware pasa usamos next para que continue al siguente 

const validarCampos = (req, res, next) => {
    // la funcion o metodo  validationResult es de express-validatos en esta funcion 
    //llegan todas las validaciones en las rutas y las almacena en la requiest que seria 
    //la solicitud del cliente si no pasa esta validaciones los errores se guardan ahi
    const errores = validationResult(req);
    //si errores es diferente de bacio devuelve esto 
    if(!errores.isEmpty()){
        return res.status(400).json(errores)
    }
    //si no false 

    next();
    //si ya no hay mas midelwares seria el controlador
}

module.exports = validarCampos;


//Es recomendable usar middlewares para validaciones cuando 
//necesitas realizar comprobaciones repetitivas o estandarizadas
//en varias rutas.


//En Express, los middlewares pueden manejar casi cualquier tarea 
//que deba realizarse en el flujo de solicitud-respuesta:
//autenticación, autorización, logging, manejo de errores,
//procesamiento de datos (archivos o JSON), configuración
//de seguridad y CORS, entre otros.