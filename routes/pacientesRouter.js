import { Router } from 'express';

import {
    listarTodosPacientes,
    listarPacientePorId,
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente
} from '../controllers/pacientesController.js';

const pacientesRoute = Router();

pacientesRoute.get('/', listarTodosPacientes);
pacientesRoute.get('/:id', listarPacientePorId);

pacientesRoute.post('/', crearPaciente);
pacientesRoute.put('/:id', actualizarPaciente);
pacientesRoute.delete('/:id', eliminarPaciente);

export default pacientesRoute;
