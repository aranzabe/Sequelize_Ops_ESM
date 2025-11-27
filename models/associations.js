import User from './User.js';
import Comment from './Comment.js';



//Definimos las asociaciones en esta carpeta para evitar referencias en bucle.
User.hasMany(Comment, {
  foreignKey: 'userId',
  as: 'comments',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export { User, Comment };