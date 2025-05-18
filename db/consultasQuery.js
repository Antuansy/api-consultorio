import { pool } from '../config.js';

/**
 * Carga la lista de consultas
 */
const listarTodasConsultasQuery = async () => {
    try {
        const result = await config.query('SELECT * FROM consultas');
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Buscar una consulta por su ID (llave primaria)
 */
const listarConsultaPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM consultas WHERE id = $1 LIMIT 1', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Guardar una nueva consulta
 */
const crearConsultaQuery = async (consulta) => {
    const { nombres } = consulta;
    try {
        const result = await pool.query(
            'INSERT INTO consultas (nombres) VALUES ($1) RETURNING *',
            [nombres]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Actualizar una consulta por su ID
 */
const actualizarConsultaQuery = async (id, consulta) => {
    const { nombres } = consulta;
    try {
        const result = await pool.query(
            'UPDATE consultas SET nombres = $1 WHERE id = $2 RETURNING *',
            [nombres, id]
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

/**
 * Eliminar una consulta por su ID
 */
const eliminarConsultaQuery = async (id) => {
    try {
        const result = await pool.query(
            'DELETE FROM consultas WHERE id = $1 RETURNING *',
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
    listarTodasConsultasQuery,
    listarConsultaPorIdQuery,
    crearConsultaQuery,
    actualizarConsultaQuery,
    eliminarConsultaQuery
}