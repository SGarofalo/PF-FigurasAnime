#  🛒 Entrega final – Figuras de Anime

Este proyecto es una API REST creada en Node.js, utilizando Express, Firestore como base de datos, JWT para autenticación y CORS habilitado.
Toda la interacción se realiza desde Postman, donde podés:

- Hacer login y generar un token JWT
- Actualizar ese token automáticamente en el resto de los request gracias a una variable global
- Crear productos
- Eliminar productos
- Obtener todos los productos
- Obtener un producto por ID

Además, al tener el proyecto desplegado en Vercel, cada request impacta directamente en la base de datos online, y todos los logs pueden verse en la terminal local.

---

## 🚀 Tecnologías utilizadas
- Node.js + Express
- Firestore (Google Firebase)
- jsonwebtoken (JWT)
- CORS
- Postman (variables de entorno, scripts de test, manejo automático del token)
- Vercel (deploy)
- JavaScript (ES6+)
- Google Firestore (base de datos NoSQL)

---

## ⚙️ Instalación y ejecución

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/PF-FigurasAnime.git
   cd PF-FigurasAnime
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Ejecutá los comandos desde la terminal:
   ```bash
   npm start
   ```
---

## 🌐 Uso desde Postman
📌 `Ejemplos` de uso

🔐 Autenticación – Login con JWT
      ```bash
      POST {{base_url}}/api/login
      ```
- El response devuelve un token JWT.
- En Postman configuraste un script de test que guarda ese token automáticamente:
            ```bash
      pm.environment.set("tokelogin", pm.response.json().token);
      ```    
- Ese token se usa en todos los demás requests:
        ```bash
      Authorization: Bearer {{tokenlogin}}
      ```
   - Toda la API se prueba desde Postman. Su URL base está configurada como variable de entorno, por ejemplo:
   - Obtener un producto específico (por ID)
      ```bash
      {{base_url}}/api/products/:id
      ```
      Y corresponde al deploy de Vercel, lo cual te permite ver en la consola cómo impactan los cambios en tiempo real.

---

## 📦 Endpoints de Productos
     
  - 🔍 Obtener todos los productos  
          ```
        GET {{base_url}}/api/products
           ```
     
   -  🔍 Obtener producto por ID
           ```
          GET {{base_url}}/api/products/:id
            ```
  - ➕ Crear un nuevo producto
     Body (raw JSON):
    ```
      📌 Parámetros:
            {
                "nombre": nombre del producto,
                "categoria": categoria del producto,
                "precio": precio del producto,
                "img": imagen del producto,
                "descripcion": descripción del producto           
            }     
      
   - ❌ Eliminar un producto
      ```bash
      DELETE {{base_url}}/api/products/:id
      ```

---

## 🧠 Servicios (services)
Parte del backend utiliza servicios como los siguientes:
```
import {agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos} from "../models/products.models.js";
```

---
 ## 🚀 Deploy

El backend está desplegado en Vercel, por lo que la API funciona con endpoints como:
```
https://pf-figuras-anime.vercel.app/
```

🔄 Diagrama de flujo de comandos
```bash
                           ┌───────────────────────┐
                           │      Ingreso API      │
                           │   (Request Postman)   │
                           └───────────┬───────────┘
                                       │
                                       ▼
                         ┌───────────────────────────┐
                         │ ¿El request tiene token?  │
                         │ (login)                   │
                         └───────────┬───────────────┘
                                     │Sí
                                     ▼
                         ┌───────────────────────────┐
                         │ Validar JWT (middleware)  │
                         └───────────┬───────────────┘
                                     │OK
                                     ▼
                     ┌────────────────────────────────────┐
                     │        Selección de endpoint       │
                     └───────────────┬────────────────────┘
                                     │
      ┌──────────────────────────────┼────────────────────────────────┐
      ▼                              ▼                                ▼
┌────────────┐               ┌──────────────┐                 ┌────────────────┐
│  GET /     │               │ POST /       │                 │ DELETE /:id    │
│ products   │               │ products     │                 │ products/:id   │
└─────┬──────┘               └──────┬───────┘                 └───────┬────────┘
      │                              │                                 │
      ▼                              ▼                                 ▼
┌──────────────┐       ┌────────────────────────┐       ┌──────────────────────────┐
│ obtener      │       │ agregarProducto()      │       │ eliminarProducto(id)     │
│ Productos()  │       └───────────┬────────────┘       └──────────┬───────────────┘
└──────┬───────┘                   │                                 │
       │                            ▼                                 ▼
       ▼                  ┌─────────────────────────┐     ┌──────────────────────────┐
┌───────────────┐         │ Guardar en Firestore    │     │ Eliminar de Firestore    │
│ Devolver lista│         └───────────┬─────────────┘     └───────────┬──────────────┘
│ de productos  │                     │                                 │
└──────┬────────┘                     ▼                                 ▼
       │                    ┌────────────────────────┐     ┌─────────────────────────┐
       ▼                    │ Respuesta JSON         │     │ Respuesta 200 OK        │
┌─────────────────────┐     └────────────────────────┘     └─────────────────────────┘
│ Respuesta JSON      │
└─────────────────────┘

# LOGIN (flujo especial)
┌───────────────────────────────┐
│     POST /login               │
└───────────────┬───────────────┘
                ▼
      ┌───────────────────────┐
      │ validarCredenciales() │
      └──────────┬────────────┘
                 ▼
      ┌──────────────────────────┐
      │ generarJWT(usuario)      │
      └──────────┬───────────────┘
                 ▼
      ┌──────────────────────────┐
      │ devolver token a Postman │
      └──────────────────────────┘

# POSTMAN
- El token se guarda en una variable: {{tokenlogin}}
- Se usa automáticamente en todos los endpoints protegidos


```
---

👩‍💻 Autor
Sol Garófalo
🔗 [LinkedIn](https://www.linkedin.com/in/m-sol-garófalo)
