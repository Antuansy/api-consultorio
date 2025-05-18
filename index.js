import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas del consultorio
import pacientesRoute from './routes/pacientesRouter.js';
// Importar las rutas de los usuarios
import medicosRoute from './routes/medicosRouter.js';
// Importar las rutas de los espacios
import consultasRoute from './routes/consultasRouter.js';
// Importar las rutas de las reservaciones
import citasRoute from './routes/citasRouter.js';


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/pacientes', pacientesRoute); // PACIENTES
app.use('/medicos', medicosRoute); // MEDICOS
app.use('/consultas', consultasRoute); // CONSULTAS
app.use('/citas', citasRoute); // CITAS


const port =
    process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})