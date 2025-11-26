import { Router } from 'express';
import controladorUsuarios from '../controllers/userController.js';
export const router = Router();


//El segundo parámetro (optativo) son los middlewares.
router.post('/', controladorUsuarios.usuariosPost);
router.put('/:dni', controladorUsuarios.usuariosPut);
router.delete('/:dni', controladorUsuarios.usuariosDelete);
router.get('/:dni', controladorUsuarios.usuarioGet);
router.get('/', controladorUsuarios.usuariosGet);

