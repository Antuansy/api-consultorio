import {
    listarTodasCitasQuery,
    listarCitaPorIdQuery,
    crearCitaQuery,
    actualizarCitaQuery,
    eliminarCitaQuery
  } from "../db/citasQuery.js";
  
  /**
   * Obtener todos las citas de la base de datos
   */
  const listarTodasCitas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const citas = await listarTodasCitasQuery();
      res.json(citas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener la cita con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarCitaPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const cita = await listarCitaPorIdQuery(req.params.id);
      res.json(cita);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un cita
   */
  const crearCita = async (req, res) => {
    console.log(req.body)
    try {
        const datosCita = req.body;
        const resultado = await crearCitaQuery(datosCita);
        res.json({ mensaje: 'Cita creada con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una cita
   */
  const actualizarCita = async (req, res) => {
    try {
        const id = req.params.id;
        const datosCita = req.body;
        const resultado = await actualizarCitaQuery(id, datosCita);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Cita actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Cita no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar una cita
   */
  const eliminarCita = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarCitaQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Cita eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Cita no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la cita', error: error.message });
    }
  };
  
  export {
    listarTodasCitas,
    listarCitaPorId,
    crearCita,
    actualizarCita,
    eliminarCita,
  };