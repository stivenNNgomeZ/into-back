# into-back

Backend para sistema de gestión académica y de tareas, desarrollado con Node.js y Express.

## Propósito

Este proyecto implementa un servidor backend básico como parte del proceso formativo del SENA (Técnico en programación de software). Sirve como base para la gestión de aprendices, programas de formación, usuarios y tareas.

## Estructura del proyecto

```
into-back/
├── src/
│   └── routes/
│       ├── users.js          # Rutas de usuarios (GET/POST /users)
│       └── tasks.js          # Rutas de tareas (GET/POST /tasks)
├── app.js                    # Servidor principal
├── package.json
└── README.md
```

## Cómo ejecutar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/stivenNNgomeZ/into-back.git
   cd into-back
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor:
   ```bash
   npm start
   ```

4. Probar las rutas en el navegador o Postman:
   - `http://localhost:3000/`
   - `http://localhost:3000/aprendices`
   - `http://localhost:3000/programas`
   - `http://localhost:3000/users`
   - `http://localhost:3000/tasks`

## Rutas disponibles

| Método | Ruta         | Descripción                     |
|--------|--------------|---------------------------------|
| GET    | `/`          | Bienvenida al sistema           |
| GET    | `/aprendices`| Gestión de aprendices           |
| GET    | `/programas` | Gestión de programas            |
| GET    | `/users`     | Listar usuarios                 |
| POST   | `/users`     | Crear usuario                   |
| GET    | `/tasks`     | Listar tareas                   |
| POST   | `/tasks`     | Crear tarea                     |
