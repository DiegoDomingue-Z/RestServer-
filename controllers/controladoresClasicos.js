const usuarioGET = (req, res = response) => {
     
    const { nombre= 'no name' } = req.query;
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'obtener datos',
        descripcion: 'peticion get ',
        nombre : nombre
    })
}

const usuarioPOST = (req, res = response) => {

    const cuerpo = req.body;
    const { nombre } = req.body

    res.status(201).json({
        estatus: 'Todo chido',
        mensaje: 'enviar datos',
        descripcion: 'peticion POST ',
        solicitud: cuerpo,
        nombre: nombre
    })
}


const usuarioPUT = (req, res = response) => {

    const { idDelUsuario } = req.params;

    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'Actualizar',
        descripcion: 'peticion PUT ',
        id: idDelUsuario
       
    })
}


const usuarioPATCH = (req, res = response) => {
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'Actualiza solamente uno a la ves',
        descripcion: 'peticion PATCH '
    })
}


const usuarioDELETE = (req, res = response) => {
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'elimina',
        descripcion: 'peticion DELETE'
    })
}
