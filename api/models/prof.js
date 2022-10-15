'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prof extends Model {
    static associate(models) {
      
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