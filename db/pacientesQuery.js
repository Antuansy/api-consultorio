import { pool } from '../config.js';

/**
 * Carga la lista de pacientes
 */
const listarTodosPacientesQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM pacientes');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar un paciente por su ID (llave primaria)
 */
const listarPacientePorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pacientes WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar un nuevo paciente
 */
const crearPacienteQuery = async (paciente) => {
    const { nombres } = paciente;
    try {
        const result = await pool.query(
            'INSERT INTO pacientes (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar un paciente por su ID
 */
const actualizarPacienteQuery = async (id, paciente) => {
    const { nombres } = paciente;
    try {
        const result = await pool.query(
            'UPDATE pacientes SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar un paciente por su ID
 */
const eliminarPacienteQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM pacientes WHERE id = $1 RETURNING *',
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
    listarTodosPacientesQuery,
    listarPacientePorIdQuery,
    crearPacienteQuery,
    actualizarPacienteQuery,
    eliminarPacienteQuery
}