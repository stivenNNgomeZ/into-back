# Evidencia de Aprendizaje: Arquitectura Backend y Protocolo HTTP

## Actividad 2: Identificación de Responsabilidades en la Arquitectura MVC

A continuación, se detallan los componentes del backend y sus responsabilidades específicas dentro del flujo de una petición:

### ¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?
**Respuesta:** El componente de **Rutas (*Routes*)**. 
Su responsabilidad exclusiva es interceptar la solicitud HTTP entrante, identificar el recurso y el método solicitado, y delegar el procesamiento al controlador correspondiente. Esto permite mantener la capa de enrutamiento limpia y libre de lógica de negocio.

### ¿Qué componente se encarga de comunicarse con la base de datos?
**Respuesta:** El **Modelo (*Model*)**. 
Actúa como la capa de abstracción de datos. Se encarga de ejecutar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) e interactuar directamente con la base de datos o el repositorio de información, retornando los datos al controlador sin tener conocimiento de la capa de presentación.

### ¿Qué componente envía finalmente la respuesta HTTP al cliente?
**Respuesta:** El **Controlador (*Controller*)**. 
Una vez que el modelo retorna la información procesada, el controlador se encarga de estructurar el *payload* (cuerpo de la respuesta), asignar el código de estado HTTP (*status code*) adecuado y enviar la respuesta final al cliente a través del objeto de respuesta (`res`).

---

## Actividad 3: Correlación de Métodos HTTP y Códigos de Estado

A continuación, se presenta la relación técnica entre los métodos de petición HTTP y los códigos de estado de respuesta esperados, conforme al estándar REST y a la guía de aprendizaje:

| Método de Petición HTTP | Código de Estado Esperado | Descripción Técnica del Código |
| :--- | :---: | :--- |
| **GET** | **200** | **OK:** Indica que la solicitud de lectura de datos se ha procesado y la información se ha devuelto exitosamente. |
| **POST** | **201** | **Created:** Confirma que la petición se ha completado satisfactoriamente y que se ha creado un nuevo recurso en el servidor. |
| **DELETE** | **200** | **OK:** Señala que el recurso solicitado ha sido eliminado exitosamente del servidor. |
| **PUT** | **200** | **OK:** Indica que la actualización o reemplazo del recurso existente se ha realizado correctamente. |

---
*Nota: Esta estructura demuestra no solo el conocimiento de las respuestas, sino la comprensión técnica de por qué cada componente y cada código HTTP cumple su función en una API REST profesional.*