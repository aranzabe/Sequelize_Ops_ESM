import express from 'express';
import cors from 'cors';
import {router as userRoutes} from '../routes/userRoutes.js';
import {router as commentsRoutes} from '../routes/commentsRoutes.js';
import kleur from 'kleur';

class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        this.commentsPath = '/api/comments';

        //Middlewares
        this.middlewares();

        this.routes();
        
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath , userRoutes);
        this.app.use(this.commentsPath , commentsRoutes);
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(kleur.green().bold(`🟢 Servidor escuchando en: ${process.env.PORT}`));
        })
    }
}

export { Server };