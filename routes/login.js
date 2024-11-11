const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/login');
const validarCampos = require('../middlewares/validarCampos');


const router = Router();

router.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('contrasena', 'La contrasela es obligatoria').not().isEmpty(),
    validarCampos
], login);


module.exports = router;