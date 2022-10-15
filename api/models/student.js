'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.hasMany(models.Registrion)
    }
  }
  Student.init({
    intelligence: DataTypes.STRING,
    ranking: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};