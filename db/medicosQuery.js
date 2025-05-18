import { pool } from '../config.js';

/**
 * Carga la lista de medicos
 */
const listarTodosMedicosQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM medicos');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un medico por su ID (llave primaria)
 */
const listarMedicoPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM medicos WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo medico
 */
const crearMedicoQuery = async (medico) => {
    const { nombres } = medico;
    try {
        const result = await pool.query(
            'INSERT INTO medicos (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un medico por su ID
 */
const actualizarMedicoQuery = async (id, medico) => {
    const { nombres } = medico;
    try {
        const result = await pool.query(
            'UPDATE medicos SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un medico por su ID
 */
const eliminarMedicoQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM medicos WHERE id = $1 RETURNING *',
            [id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Exportar todas los funciones definidas en este archivo
export {
    listarTodosMedicosQuery,
    listarMedicoPorIdQuery,
    crearMedicoQuery,
    actualizarMedicoQuery,
    eliminarMedicoQuery
}