const { Sequelize } = require('sequelize');

// Creación de una instancia de Sequelize con los parámetros de conexión, sin contraseña
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Especifica que estás usando MySQL
    logging: true, // Desactiva el logging de las consultas SQL en la consola (puedes activarlo para depuración)
});

// Función para probar la conexión
const db = async () => {
    try {
        await sequelize.authenticate(); // Verifica la autenticidad de la conexión
        console.log('Conectado a la base de datos MySQL con Sequelize'.bgMagenta);
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexión de la base de datos'.red);
    }
};

module.exports = { sequelize, db };



