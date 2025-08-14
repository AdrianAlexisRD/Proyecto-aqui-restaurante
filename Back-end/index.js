import express from 'express';
import {conectarMongo} from'./db.js'; // Importa la conexión a la base de datos
import dotenv from 'dotenv';
import cors from 'cors';
import { 
  crearRestaurante,
   obtenerRestaurantes, 
   BuscarRestaurante
  } from './DataControllers/RestaurantControllers.js'; 
import {
  darLike,
  crearLike,
} from './DataControllers/LikesController.js';
const router = express.Router();
dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;
conectarMongo();
app.use(express.json());


router.route('/restaurante')
  .get(obtenerRestaurantes)
  .post(crearRestaurante);

router.route('/buscarRestaurante')
  .get(BuscarRestaurante);

router.route('/likes')
  .patch(darLike);


app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

