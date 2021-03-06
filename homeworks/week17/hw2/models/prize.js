/* eslint-disable */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Prize.init({
    prize: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    probability: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prize',
  });
  return Prize;
};