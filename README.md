# 🏨 API de Reservas de Hotel - Proyecto 4
Este proyecto es una API desarrollada con Node.js y Express que permite gestionar reservas de hotel (crear, leer, actualizar y eliminar).

## Tecnologías utilizadas
- **Node.js**: v22.17.0
- **npm**: v10.9.2
- **Express**: v5.1.0
- **Thunder Client**: Extensión de VS Code para pruebas

---

## Estructura del Proyecto 


PROYECTO4/
│
├── controllers/
│   └── reservasController.js      
├── routes/
│   └── reservas.js                
├── server.js                     
├── .env                           
├── package.json                   
├── README.md        

---

## Endpoints
### 1. Crear Reserva (POST)
- **URL**: `http://localhost:3000/api/reservas`
**Body (JSON)**:
  ```json
  {
    "hotel": "Hotel Gatuno",
    "tipo_habitacion": "doble",
    "num_huespedes": 2,
    "fecha_inicio": "2025-10-01",
    "fecha_fin": "2025-10-07"
  }

## 2. Obtener Reservas
GET Todas las reservas: GET http://localhost:3000/api/reservas

GET Reserva específica: GET http://localhost:3000/api/reservas/:id

## 3. Actualizar Reserva (PUT)

URL: PUT http://localhost:3000/api/reservas/:id

Body: Misma estructura que crear 

## 4. Eliminar Reserva (DELETE)

URL: DELETE http://localhost:3000/api/reservas/:id



## Cómo ejecutar el proyecto
```bash
# Instalar dependencias
npm install

# Iniciar servidor
node server.js

# El servidor estará disponible en
http://localhost:3000 

```   

---


## 🖼️ Pruebas con Thunder Client

| Método | Captura | Descripción |
|--------|---------|-------------|
| POST | ![Captura POST](screenshots/post-reserva.png) | Creación de reserva |
| GET | ![Captura GET](screenshots/get-reservas.png) | Consulta de reservas |
| DELETE | ![Captura DELETE](screenshots/delete-reserva.png) | Eliminación de reserva |

📝 Notas del Estudiante
Proyecto desarrollado como parte del modulo node.js realizado por Pia Henriquez