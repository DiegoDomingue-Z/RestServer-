

//conexion a base de datos manual 
const mysql = require('mysql2/promise'); 
require('colors')

const db = async() => {

    try{

        const conexion = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
        });
        console.log('Conectado a la base de datos MySQL'.bgMagenta);
        return conexion

    }catch(error){
        console.log(error);
        throw new Error('Error en la conexion de la base de datos'.red);
    }
}


module.exports = { db };


//edpoind 

const usuariossii = (req, res = response) => {
    
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

