import { Router } from 'express';

import {
    listarTodosMedicos,
    listarMedicoPorId,
    crearMedico,
    actualizarMedico,
    eliminarMedico
} from '../controllers/medicosController.js';

const medicosRoute = Router();

medicosRoute.get('/', listarTodosMedicos);
medicosRoute.get('/:id', listarMedicoPorId);

medicosRoute.post('/', crearMedico);
medicosRoute.put('/:id', actualizarMedico);
medicosRoute.delete('/:id', eliminarMedico);

export default medicosRoute;