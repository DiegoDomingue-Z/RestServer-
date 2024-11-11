const jwt = require('jsonwebtoken');

// uid es el identificador unico del usuario
const generarJWT = (uid = '') => {
    return new Promise((resolver, rechazar) => {

        //payload es como la firma o cuerpo del jwt 
        const payload = { uid }

        jwt.sign(payload, process.env.secretOrPrivateKey, {
            expiresIn: '2h'
        }, (err, token) => {
            if(err){
                console.log(err)
                rechazar('No se pudo generar el TOKEN')
            }else{
                resolver(token);
            }
        })

    })
}

module.exports = {
    generarJWT
}