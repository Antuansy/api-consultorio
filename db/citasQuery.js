import { pool } from '../config.js';

/**
 * Carga la lista de citas
 */
const listarTodasCitasQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM citas');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar una cita por su ID (llave primaria)
 */
const listarCitaPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM citas WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar una nueva cita
 */
const crearCitaQuery = async (cita) => {
    const { nombres } = cita;
    try {
        const result = await pool.query(
            'INSERT INTO citas (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar una cita por su ID
 */
const actualizarCitaQuery = async (id, cita) => {
    const { nombres } = cita;
    try {
        const result = await pool.query(
            'UPDATE citas SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar una cita por su ID
 */
const eliminarCitaQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM citas WHERE id = $1 RETURNING *',
            [id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodasCitasQuery,
    listarCitaPorIdQuery,
    crearCitaQuery,
    actualizarCitaQuery,
    eliminarCitaQuery
}