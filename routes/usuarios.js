const { Router } = require('express');
const { check } = require('express-validator');
const {
usuariosConsulta,
actualizarUsuario,
usuarioId,
eliminarUsuario,
crearUsuario} = require('../controllers/usuarios');
const { rolValido, emailExistee, existeId } = require('../helpers/db-validaciones');

const validarCampos = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');
const { esAdminRol, tieneRol } = require('../middlewares/validar-roles');
//
//const {validarCampos, validarJWT,  tieneRol} = require('../middlewares/index')

const router = Router();

router.get('/', usuariosConsulta);

router.get('/:id', usuarioId);

router.post('/',[
    //al colocar not.isEmpty le estamos diciendo si el campo no esta bacio 
    //manda el mensaje del campo es obligatorio
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('contrasena', 'La contrseña debe tener 6 caracteres minimo').isLength({min:6, max:10}),
    //el campo correo lo estraemos del body de la request o de lo manda el cliente
    check('correo').isEmail().withMessage('Debes colocar un correo valido'),
    //al colocarle isin es como decirle si esta en mi array entonces agregalo 
    //check('rol','No es un rol valido').isIn(['Admin','Agente','Tecnico']),

    //con el custom podemoa hacer verficaciones personalizadas
    check('rol').custom((rol) => rolValido(rol)),
    //esto el lo mismo check('rol').custom( rolValido),

    check('correo').custom((correo) => emailExistee(correo)),
    validarCampos,
], crearUsuario);

router.put('/:idss', [
    check('idss', 'No es un id valido').isInt({min: 1}),
    check('idss').custom((idss) => existeId(idss)),
    check('rol').custom((rol) => rolValido(rol)),
    validarCampos
], actualizarUsuario);

router.delete('/:idss',[
    validarJWT,
    //esAdminRol,
    tieneRol('Admin','Agente'),
    check('idss', 'No es un id valido').isInt({min: 1}),
    check('idss').custom((idss) => existeId(idss)),
    validarCampos
],
eliminarUsuario);


module.exports = router;