const validarCampos = require('../middlewares/validarCampos');
const  validarJWT  = require('../middlewares/validarJWT');
const validarRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles
}