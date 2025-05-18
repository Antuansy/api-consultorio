import { Router } from 'express';

import {
    listarTodasConsultas,
    listarConsultaPorId,
    crearConsulta,
    actualizarConsulta,
    eliminarConsulta
} from '../controllers/consultasController.js';

const consultasRoute = Router();

consultasRoute.get('/', listarTodasConsultas);
consultasRoute.get('/:id', listarConsultaPorId);

consultasRoute.post('/', crearConsulta);
consultasRoute.put('/:id', actualizarConsulta);
consultasRoute.delete('/:id', eliminarConsulta);

export default consultasRoute;