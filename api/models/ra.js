'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RA extends Model {
    static associate(models) {
      
    }
  }
  RA.init({
    capability: DataTypes.STRING,
    salary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RA',
  });
  return RA;
};