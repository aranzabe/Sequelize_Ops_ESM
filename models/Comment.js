'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../database/connection.js';
import User from './User.js';

  class Comment extends Model {
   
    static associate(models) {
      
    }
  }
  Comment.init({
    comentario: DataTypes.STRING,
    puntuacion: DataTypes.STRING,
    userId: {
      type: DataTypes.BIGINT,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, 
  {
    sequelize: db,
    modelName: 'Comment',
    tableName: 'comments'
  });


  // Comment.belongsTo(User, {
  //     foreignKey: 'id',
  //     as: 'user' 
  //   });

  export default Comment;
