// Importar express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Variables globales
const tasks = [];
const MAX_TASKS = 5;

// Función para agregar una tarea
function addTask(task) {
    if (tasks.length < MAX_TASKS) {
        tasks.push(task);
        console.log(`Tarea agregada: "${task}"`);
    } else {
        console.log("No puedes agregar más tareas. Límite alcanzado.");
    }
}

// Función para listar las tareas
function listTasks() {
    console.log("\n--- Lista de tareas ---");
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    } else {
        for (let i = 0; i < tasks.length; i++) {
            console.log(`${i}: ${tasks[i]}`); // Se muestra el índice
        }
    }
}

// Función para eliminar una tarea por su índice
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        console.log(`Tarea eliminada: "${tasks[index]}"`);
        tasks.splice(index, 1); // Elimina la tarea en la posición indicada
    } else {
        console.log("Índice inválido. Inténtalo de nuevo.");
    }
}

// Endpoints para interactuar con las tareas

// Obtener todas las tareas
app.get("/tasks", (req, res) => {
    res.json({ tasks });
});

// Agregar una tarea
app.post("/tasks", (req, res) => {
    const { task } = req.body;  
    if (!task) {
        return res.status(400).json({ error: "La tarea es requerida" });
    }
    tasks.push(task);
    res.status(201).json({ message: "Tarea agregada", tasks });
});

// Eliminar una tarea por índice
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = parseInt(id);
    removeTask(index);
    res.json({ tasks });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

// Exportar las funciones
module.exports = { addTask, listTasks, removeTask };
