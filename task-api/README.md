Las API está construida con Node.js y Express y maneja operaciones básicas de gestión de tareas. Funciona escuchando solicitudes HTTP en diferentes endpoints (rutas) y respondiendo con datos en formato JSON.

Flujo de funcionamiento:
El usuario (cliente) envía una solicitud HTTP (GET, POST, DELETE) a la API.
La API procesa la solicitud, interactuando con una lista en memoria que guarda las tareas.
La API responde con un JSON, confirmando la acción realizada o devolviendo datos.

Rutas de la API (Endpoints):

URL Base: http://localhost:80

La API tiene tres rutas principales:

1 Obtener todas las tareas
Método: GET
Ruta: /tasks
Función: Devuelve la lista de tareas almacenadas.
Ejemplo de solicitud en Postman o Thunder Client:

Método: GET
URL: http://localhost:80/tasks

2 Agregar una nueva tarea
Método: POST
Ruta: /tasks
Función: Recibe una nueva tarea y la agrega a la lista.
Formato del cuerpo de la solicitud: JSON con la nueva tarea.
Ejemplo de solicitud en Postman o Thunder Client:

Método: POST
URL: http://localhost:80/tasks

3 Eliminar una tarea
Método: DELETE
Ruta: /tasks/:id
Función: Elimina una tarea según su índice en la lista.
Ejemplo de solicitud en Postman o Thunder Client:

Método: DELETE
URL: http://localhost:80/tasks/1

Cómo maneja los datos la API:

La API usa una lista en memoria para almacenar las tareas, lo que significa que al reiniciar el servidor, se pierden los datos. Para hacerla persistente, podrías conectarla a una base de datos en el futuro.

Ejemplo de estructura interna:
let tasks = ["Comprar pan", "Estudiar Node.js"];
