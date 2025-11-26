
'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../database/connection.js';
import Comment from './comments.js';

class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'User',
    tableName : 'users',
  });

  // User.hasMany(Comment, {
  //   foreignKey: 'userId',
  //   as: 'comments' 
  // });

  export default User;