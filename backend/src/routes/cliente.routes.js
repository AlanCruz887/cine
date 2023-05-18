const {Router} = require('express')
const router = Router()
const clienteController = require("../controllers/cliente.controller")

router.get('/cliente',clienteController.obtenerTodosClientes)


module.exports = router