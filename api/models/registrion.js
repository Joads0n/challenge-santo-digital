'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registrion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registrion.init({
    grade: DataTypes.STRING,
    sat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registrion',
  });
  return Registrion;
};