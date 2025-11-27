import { Op, Sequelize } from 'sequelize';
// import User from '../models/user.js';
// import Comment from '../models/comments.js';
import { User, Comment } from '../models/associations.js';
import db from './connection.js';

class CommentService {

    //----------------- Métodos para los comentarios -----------------------
    getComments = async() => {
        let resultado = [];
        resultado = await Comment.findAll();
        return resultado;
    }


    getCommentsId = async(idU) => {
        let resultado = [];
        console.log(idU)
        resultado = await User.findAll({ 
            where: { id: { [Op.eq]: idU } },
            include: [{
              model: Comment,
              as: 'comments'
            }],
            attributes: ['id', 'firstName', 'lastName', 'email']
           });
        return resultado;
    }


    getCommentsPuntuacion = async(puntos) => {
        // let resultado = [];
        // //Opción A) 
        // console.log(puntos)
        // resultado = await Comment.findAll({ 
        //     where: { puntuacion: { [Op.gte]: puntos } },
        //     //Si queremos añaidr la informción del usuario que ha hecho cada comentario, descomentamos lo que sigue.
        //     include: [
        //         {
        //             model: User,  //Relación con el modelo User
        //             as: 'user',   //Alias definido en la asociación
        //             attributes: ['firstName', 'lastName', 'email'], //Atributos específicos de User que quiero mostrar..
        //         }
        //     ],
        //     attributes: ['comentario', 'puntuacion'],
        //    });
        //Opción b) Con raw queries.
        const query = `SELECT * FROM comments WHERE puntuacion >= :punt`;
        const resultado = await db.query(query, {
            replacements: { punt : puntos }, //Parámetros para la consulta
            type: db.QueryTypes.SELECT, //Indica que queremos obtener resultados
        });
        return resultado;
    }



    getCommentsPuntuacionIntervalo = async(min, max) => {
        let resultado = [];
        console.log(`Rango: ${min} - ${max}`);
        resultado = await Comment.findAll({
            //Podemos poner esta condición en la que busque comentarios con puntuación en un rango específico.
            // where: { puntuacion: { [Op.between]: [min, max] } },
            //O (coemntando / descomentando una u otra) poner esta otra condición en la que busca los comentarios con puntuación mayor O con puntuación menor a los valores dados.
            where: {
                [Op.or]: [
                    { puntuacion: { [Op.gt]: max } }, 
                    { puntuacion: { [Op.lt]: min } }, 
                ]
            }
        });
    return resultado;
    }


    //SELECT AVG(puntuacion) AS averageScore FROM Comments;
    getPuntuacionMedia  = async() => {
        const resultado = await Comment.findAll({
            attributes: [[Sequelize.fn('AVG', Sequelize.col('puntuacion')), 'averageScore']]
        });
        //console.log('.......',resultado)
        return resultado[0].dataValues.averageScore; 
    }


    getIntervaloYTexto =    async(min, max, texto) => {
        const resultado = await Comment.findAll({
            where: {
                [Op.and]: [ //Con esto le decimos que se cumplan todas las condiciones siguietes.
                    { puntuacion: { [Op.between]: [min, max] } }, //Intervalo de puntuación
                    { comentario: { [Op.like]: `%${texto}%` } }  //Comentario contiene la palabra clave
                ]
            },
            include: [
                {
                    model: User,  //Relación con el modelo User
                    as: 'user',   //Alias definido en la asociación
                    attributes: ['firstName', 'lastName', 'email'], //Atributos específicos de User que quiero mostrar..
                }
            ],
            attributes: ['id', 'comentario', 'puntuacion'], //Atributos de Comment para mosstrar.
        });
        return resultado;
    }
}

export default CommentService;
