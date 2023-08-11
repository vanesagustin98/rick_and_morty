require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('../src/models/Favorite')
const UserModel = require('../src/models/User')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
      { logging: false, native: false }
);

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
   // URL

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
FavoriteModel(sequelize)
UserModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "User_favorite"}, { timestamps: false})
Favorite.belongsToMany(User,{ through: "User_favorite"}, { timestamps: false} )

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
