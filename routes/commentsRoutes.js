import { Router } from 'express';
import controladorComentarios from '../controllers/commentController.js';
export const router = Router();



router.get('/puntuacion/:puntos', controladorComentarios.getCommentsPuntuacion) //Para mostrar los comentarios que tengan más de x puntos.
router.get('/intervalopuntos/:min/:max', controladorComentarios.getCommentsIntervalo)//Obtener comentarios en un intervalo de puntuaciones
router.get('/filtrar/:min/:max/:texto',controladorComentarios.getIntervaloYTexto)//Obtener comentarios dentro de un intervalo de puntuaciones y con un texto específico
router.get('/media',controladorComentarios.getPuntuacionMedia)//Calcular la media de puntuaciones de los comentarios
router.get('/:id', controladorComentarios.getCommentsId); //Para mostrar los comentarios de un usuario en concreto identificado por su id.
router.get('/', controladorComentarios.getComments); //Ruta genérica. Devuelve todos los comentarios. Esta ruta debería ir la última para que no interfiera con las demás rutas.
