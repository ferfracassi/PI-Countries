const { Sequelize, Model, DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
       },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        },
    nameOfficial: {
      type: DataTypes.STRING,
      allowNull: false,
        },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borders: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // languages: {
    //   type: DataTypes.STRING, 
    //   allowNull: true,
    // }
  },
  {
    timestamps: true
  });
};


