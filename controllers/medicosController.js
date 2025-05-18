import {
    listarTodosMedicosQuery,
    listarMedicoPorIdQuery,
    crearMedicoQuery,
    actualizarMedicoQuery,
    eliminarMedicoQuery
  } from "../db/medicosQuery.js";
  
  /**
   * Obtener todos los medicos de la base de datos
   */
  const listarTodosMedicos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const medicos = await listarTodosMedicosQuery();
      res.json(medicos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener al medico con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarMedicoPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const medico = await listarMedicoPorIdQuery(req.params.id);
      res.json(medico);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un medico
   */
  const crearMedico = async (req, res) => {
    console.log(req.body)
    try {
        const datosMedico = req.body;
        const resultado = await crearMedicoQuery(datosMedico);
        res.json({ mensaje: 'Medico creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un medico
   */
  const actualizarMedico = async (req, res) => {
    try {
        const id = req.params.id;
        const datosMedico = req.body;
        const resultado = await actualizarMedicoQuery(id, datosMedico);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Medico actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Medico no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un medico
   */
  const eliminarMedico = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarMedicoQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Medico eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Medico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el medico', error: error.message });
    }
  };
  
  export {
    listarTodosMedicos,
    listarMedicoPorId,
    crearMedico,
    actualizarMedico,
    eliminarMedico,
  };