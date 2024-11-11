const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

const Roles = sequelize.define('Roles', {
    rol: {
        type: DataTypes.STRING,
        allowNull: true,
        require: [true, 'El rol es obligatorio']
    }
},{
    tableName: 'roles',
    timestamps: false,
});

module.exports = Roles;