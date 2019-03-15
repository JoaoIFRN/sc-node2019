const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Autor = sequelize.define('autor',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName: 'autor'});

module.exports = Autor;