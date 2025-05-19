# 🏥 API de Consultorio Médico

API RESTful para administrar pacientes, médicos, citas y consultas. Esta API permite llevar el control de los recursos básicos de un consultorio, como la gestión de pacientes, asignación de citas y registro de consultas médicas.

---

## 📦 Tecnologías utilizadas

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **dotenv** para variables de entorno
* Estructura modular: controladores, rutas y conexión a base de datos.

---

## 🗃️ Modelo relacional

### 🔹 Tabla: `pacientes`

* `id_paciente` (PK)
* `nombre`
* `apellido`
* `fecha_nacimiento`
* `genero`
* `telefono`

### 🔹 Tabla: `medicos`

* `id_medico` (PK)
* `nombre`
* `especialidad`
* `telefono`

### 🔹 Tabla: `citas`

* `id_cita` (PK)
* `id_paciente` (FK → pacientes)
* `id_medico` (FK → medicos)
* `fecha`
* `hora`

### 🔹 Tabla: `consultas`

* `id_consulta` (PK)
* `id_cita` (FK → citas)
* `diagnostico`
* `tratamiento`
* `notas`

---

## 🔗 Endpoints REST (organizados por recurso)

### 🧑 Pacientes

| Método | Ruta             | Descripción                 |
| ------ | ---------------- | --------------------------- |
| GET    | `/pacientes`     | Obtener todos los pacientes |
| GET    | `/pacientes/:id` | Obtener un paciente por ID  |
| POST   | `/pacientes`     | Crear un nuevo paciente     |
| PUT    | `/pacientes/:id` | Actualizar un paciente      |
| DELETE | `/pacientes/:id` | Eliminar un paciente        |

---

### 🩺 Médicos

| Método | Ruta           | Descripción               |
| ------ | -------------- | ------------------------- |
| GET    | `/medicos`     | Obtener todos los médicos |
| GET    | `/medicos/:id` | Obtener un médico por ID  |
| POST   | `/medicos`     | Crear un nuevo médico     |
| PUT    | `/medicos/:id` | Actualizar un médico      |
| DELETE | `/medicos/:id` | Eliminar un médico        |

---

### 📅 Citas

| Método | Ruta         | Descripción             |
| ------ | ------------ | ----------------------- |
| GET    | `/citas`     | Obtener todas las citas |
| GET    | `/citas/:id` | Obtener una cita por ID |
| POST   | `/citas`     | Crear una nueva cita    |
| PUT    | `/citas/:id` | Actualizar una cita     |
| DELETE | `/citas/:id` | Eliminar una cita       |

---

### 📋 Consultas

| Método | Ruta             | Descripción                 |
| ------ | ---------------- | --------------------------- |
| GET    | `/consultas`     | Obtener todas las consultas |
| GET    | `/consultas/:id` | Obtener una consulta por ID |
| POST   | `/consultas`     | Crear una nueva consulta    |
| PUT    | `/consultas/:id` | Actualizar una consulta     |
| DELETE | `/consultas/:id` | Eliminar una consulta       |

---

## 📁 Estructura del Proyecto

Basado en la carpeta `API-CONSULTORIO`:

API-CONSULTORIO/
│
├── controllers/ # Lógica de controladores para cada recurso
│   ├── citasController.js
│   ├── consultasController.js
│   ├── medicosController.js
│   └── pacientesController.js
│
├── db/ # Lógica de consultas SQL para cada recurso
│   ├── citasQuery.js
│   ├── consultasQuery.js
│   ├──db.js
│   ├── medicosQuery.js
│   └── pacientesQuery.js
│
├── routes/ # Definición de rutas y endpoints
│   ├──citasRouter.js
│   ├── consultasRouter.js
│   ├── medicosRouter.js
│   └── pacientesRouter.js
│
├── .env # Variables de entorno (puerto, claves, etc.)
├── .gitignore
├── config.js # Configuración general o conexión a la base de datos
├── gestion\_de\_consultorio.sql # Script de la base de datos
├── index.js # Archivo principal de la aplicación
├── package.json # Dependencias y scripts
├── package-lock.json
└── README.md # Documentación del proyecto

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/Antuansy/api-consultorio.git
cd api-consultorio
```

Instala las dependencias:

```bash
npm install
```

Configura las variables de entorno en un archivo `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=gestion_de_consultorio
PORT=3000
```

Ejecuta la aplicación:

```bash
node index.js
```

---

## 📚 Licencia

Este proyecto está bajo la licencia MIT.
