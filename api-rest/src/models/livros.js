const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Livro = sequelize.define('livro', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    descricao: Sequelize.TEXT
});

module.exports = Livro;
