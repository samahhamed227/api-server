'use strict '
const DARABASE_URL=process.env.DARABASE_URL||"postgres://samah:root@127.0.0.1:5432/peopledb"
const {Sequelize , DataTypes} = require('sequelize');

const Collection = require('./collection-class');
const foodModel = require('./food.model');
const clothesModel= require('./clothes.model');

let sequelize = new Sequelize(DARABASE_URL);

const foodSchema = foodModel(sequelize,DataTypes);
const clothesSchema = clothesModel(sequelize,DataTypes);

foodSchema.hasMany(clothesSchema, { foreignKey:'clothesId', sourceKey:'id' });
clothesSchema.belongsTo(foodSchema, { foreignKey:'clothesId', sourceKey:'id' });

const foodCollection = new Collection(foodSchema);
const clothesCollection = new Collection (clothesSchema);
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ?  {dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}}: {}
const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
module.exports={
  foodCollection:foodCollection,
  clothesCollection:clothesCollection,
  db:sequelize,
};