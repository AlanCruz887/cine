const { getConnection,sql } = require ("../database/connection")

const clienteController = {}


clienteController.obtenerTodosClientes = async (req,res)=>{
    const pool = await getConnection();
    const result = await pool.request().query("select * from cliente")
    res.json(result.recordset)
}



module.exports = clienteController