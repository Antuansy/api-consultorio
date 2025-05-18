import { Router } from 'express';

import {
    listarTodasCitas,
    listarCitaPorId,
    crearCita,
    actualizarCita,
    eliminarCita
} from '../controllers/citasController.js';

const citasRoute = Router();

citasRoute.get('/', listarTodasCitas);
citasRoute.get('/:id', listarCitaPorId);

citasRoute.post('/', crearCita);
citasRoute.put('/:id', actualizarCita);
citasRoute.delete('/:id', eliminarCita);

export default citasRoute;