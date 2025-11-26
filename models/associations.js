import User from './user.js';
import Comment from './comments.js';



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