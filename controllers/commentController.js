import {response,request} from 'express';
import CommentService from '../database/CommentsService.js'

const conx = new CommentService();

const controladorComentarios = { 
    getComments : (req, res = response) => {
        conx.getComments()
            .then( msg => {
                console.log('🔵 Listado de comentarios correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.log('‼️ No hay comentarios');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    getCommentsId : (req, res = response) => {
        conx.getCommentsId(req.params.id)    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.log('‼️ No hay registros',err);
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    getCommentsPuntuacion : (req, res = response) => {
        conx.getCommentsPuntuacion(req.params.puntos)    
            .then( msg => {
                console.log('🔵 Listado de comentarios por puntuación correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.log('‼️ No hay registros',err);
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    getCommentsIntervalo : (req, res = response) => {
        const { min, max } = req.params
        conx.getCommentsPuntuacionIntervalo(min,max)    
            .then( msg => {
                console.log('🔵 Listado de comentarios por intervalo correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.log('‼️ No hay registros',err);
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    getPuntuacionMedia : (req, res = response) => {
        conx.getPuntuacionMedia()    
            .then( msg => {
                console.log('🔵 Listado de comentarios por media correcto!');
                res.status(200).json({'media': msg});
            })
            .catch( err => {
                console.log('‼️ No hay registros',err);
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
    getIntervaloYTexto : (req, res = response) => { 
        const { min, max, texto } = req.params
        conx.getIntervaloYTexto(min, max, texto)    
            .then( msg => {
                console.log('🔵 Listado de comentarios por intervalo y texto específico correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.log('‼️ No hay registros',err);
                res.status(203).json({'msg':'No se han encontrado registros'});
             })
    }
}

export default controladorComentarios;