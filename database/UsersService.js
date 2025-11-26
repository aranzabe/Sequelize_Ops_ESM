import { Op, Sequelize } from 'sequelize';
// import User from '../models/user.js';
// import Comment from '../models/comments.js';
import { User, Comment } from '../models/associations.js';
import db from './connection.js';

class UserService {

    getlistado = async() => {
        let resultado = [];
        console.log(`Accediendo a los datos...`)
        resultado = await User.findAll({
            attributes: ['firstName', 'lastName', 'email']
          });
        return resultado;
    }

    getUsuario = async(dni) => {
        let resultado = [];
        resultado = await User.findByPk(dni);
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarUsuario = async(body) => {
        let resultado = 0;
        try{
            const usuarioNuevo = new User(body); //Con esto añade los timeStamps.
            await usuarioNuevo.save();
            //const usuarioNuevo = await User.create(body);
            resultado = 1; //Asume que la inserción fue exitosa
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                console.log(`El id ${body.id} ya existe en la base de datos.`);
            } else {
                console.log('Ocurrió un error desconocido: ', error);
            }
            throw error; 
        } 
        return resultado;
    }

    modificarUsuario = async(dni, body) => {
        let resultado = await User.findByPk(dni);
        if (!resultado){
            throw error;
        }
        await resultado.update(body);
        return resultado;
    }

    borrarUsuario = async(dni) => {
        let resultado = await User.findByPk(dni);
        if (!resultado){
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }



}

export default UserService;
