import {
    listarTodosPacientesQuery,
    listarPacientePorIdQuery,
    crearPacienteQuery,
    actualizarPacienteQuery,
    eliminarPacienteQuery
  } from "../db/pacientesQuery.js";
  
  /**
   * Obtener todos los pacientes de la base de datos
   */
  const listarTodosPacientes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const pacientes = await listarTodosPacientesQuery();
      res.json(pacientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener al paciente con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarPacientePorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const paciente = await listarPacientePorIdQuery(req.params.id);
      res.json(paciente);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un paciente
   */
  const crearPaciente = async (req, res) => {
    console.log(req.body)
    try {
        const datosPaciente = req.body;
        const resultado = await crearPacienteQuery(datosPaciente);
        res.json({ mensaje: 'Paciente creado con éxito', id: resultado.rows[0].id });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un paciente
   */
  const actualizarPaciente = async (req, res) => {
    try {
        const id = req.params.id;
        const datosPaciente = req.body;
        const resultado = await actualizarPacienteQuery(id, datosPaciente);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Paciente actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un paciente
   */
  const eliminarPaciente = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarPacienteQuery(id);
        if (resultado.rowCount > 0) {
            res.json({ mensaje: 'Paciente eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el paciente', error: error.message });
    }
  };
  
  export {
    listarTodosPacientes,
    listarPacientePorId,
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente,
  };