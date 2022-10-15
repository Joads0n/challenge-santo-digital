'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      
    }
  }
  Course.init({
    rating: DataTypes.STRING,
    diff: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};