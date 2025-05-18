import {
    listarTodasConsultasQuery,
    listarConsultaPorIdQuery,
    crearConsultaQuery,
    actualizarConsultaQuery,
    eliminarConsultaQuery
  } from "../db/consultasQuery.js";
  
  /**
   * Obtener todos las consultas de la base de datos
   */
  const listarTodasConsultas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const consultas = await listarTodasConsultasQuery();
      res.json(consultas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener la consulta con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarConsultaPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const consulta = await listarConsultaPorIdQuery(req.params.id);
      res.json(consulta);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un consulta
   */
  const crearConsulta = async (req, res) => {
    console.log(req.body)
    try {
        const datosConsulta = req.body;
        const resultado = await crearConsultaQuery(datosConsulta);
        res.json({ mensaje: 'Consulta creada con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una consulta
   */
  const actualizarConsulta = async (req, res) => {
    try {
        const id = req.params.id;
        const datosConsulta = req.body;
        const resultado = await actualizarConsultaQuery(id, datosConsulta);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Consulta actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Consulta no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar una consulta
   */
  const eliminarConsulta = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarConsultaQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Consulta eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Consulta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la consulta', error: error.message });
    }
  };
  
  export {
    listarTodasConsultas,
    listarConsultaPorId,
    crearConsulta,
    actualizarConsulta,
    eliminarConsulta,
  };