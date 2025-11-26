import {response,request} from 'express';
import UserService from '../database/UsersService.js'

const conx = new UserService();

const controladorUsuarios = { 
    usuariosGet :  (req, res = response) => {
        conx.getlistado()    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    usuarioGet :  (req, res = response) => {
        conx.getUsuario(req.params.dni)    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se ha encontrado el registro'});
            });
    },
    usuariosPost :  (req = request, res = response) => {
        //conx.registrarUsuario(req.body.DNI, req.body.Nombre, req.body.Clave, req.body.Tfno)    
        conx.registrarUsuario(req.body)    
            .then( msg => {
                console.log('🔵 Insertado correctamente!');
                res.status(201).json(msg);
            })
            .catch( err => {
                console.log('‼️ Fallo en el registro!');

                //Manejar error de clave duplicada (unique)
                if (err.name === "SequelizeUniqueConstraintError") {
                    return res.status(400).json({
                        error: "DNI duplicado",
                        message: `El DNI ${req.body.dni} ya existe`
                    });
                }

                //Otros errores
                res.status(500).json({
                    error: "Error interno del servidor",
                    detalles: err.message
                });
            });
    },
    usuariosDelete :  (req, res = response) => {
        conx.borrarUsuario(req.params.dni)    
            .then( msg => {
                console.log('🔵 Borrado correctamente!');
                res.status(202).json(msg);
            })
            .catch( err => {
                console.log('‼️ Fallo en el borrado!');
                res.status(203).json(err);
            });
    },
    usuariosPut :  (req, res = response) => {
        conx.modificarUsuario(req.params.dni, req.body)    
            .then( msg => {
                console.log('🔵 Modificado correctamente!');
                res.status(202).json(msg);
            })
            .catch( err => {
                onsole.log('‼️ Fallo en la modificación!');
                res.status(203).json(err);
            });
    }
}

export default controladorUsuarios