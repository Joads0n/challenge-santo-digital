'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prof extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prof.init({
    popularity: DataTypes.STRING,
    teachingability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prof',
  });
  return Prof;
};