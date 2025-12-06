#  🛒 Entrega final – Figuras de Anime

Este proyecto es una aplicación en Node.js que permite gestionar productos (figuras de anime) utilizando distintos métodos HTTP (GET, POST y DELETE) desde la terminal.

Los productos fueron agregados manualmente desde Postman, y el sistema cuenta con un login que genera un token. Ese token se guarda en una variable para reutilizarlo automáticamente en los siguientes requests (crear, consultar y eliminar productos).

- 📌 Como base de datos se utilizó Firestore (Firebase).
- 📌 El proyecto está deployado en Vercel.
- 📌 Para la entrega se usaron ejemplos de figuras de Dragon Ball, aunque el sistema es totalmente genérico para cualquier figura de anime.

---

## 🚀 Tecnologías utilizadas
- [Node.js](https://nodejs.org/)
- Express (framework para construir el servidor)
- CORS (control de acceso entre orígenes)
- jsonwebtoken (gestión de autenticación y tokens)
- Fetch API
- JavaScript (ES6+)
- Google Firestore (base de datos NoSQL)
- Vercel (hosting / serverless)
- Postman (para pruebas e inserción inicial de productos)

---

## ⚙️ Instalación y ejecución

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/PF-FigurasAnime.git
   cd PE
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Ejecutá los comandos desde la terminal:


🔍 Consultar productos
📌 `Ejemplos` de uso
   - Obtener todos los productos
      ```bash
      npm run start GET products
      ```
   - Obtener un producto específico (por ID)
      ```bash
      npm run start GET products/8
      ```
➕ Crear un nuevo producto
   ```bash
   npm run start POST products "Remera turbo" 100 "remeritas"
   ```
      📌 Parámetros:
         title: nombre del producto
         price: precio del producto
         category: categoría
     
      
❌ Eliminar un producto
   ```bash
   npm run start DELETE products/6
   ```

---

🔄 Diagrama de flujo de comandos
```bash
┌────────────────┐
│ Ingreso comando│
│ npm run start  │
│  MÉTODO PATH   │
└───────┬────────┘
        │
        ▼
 ┌─────────────┐
 │ ¿Es GET?    │─── Sí ──► products ─► ObtenerProductos()
 └───────┬─────┘
         │No
         ▼
 ┌─────────────┐
 │ ¿Es POST?   │─── Sí ──► products + datos ─► agregarProducto()
 └───────┬─────┘
         │No
         ▼
 ┌─────────────┐
 │ ¿Es DELETE? │─── Sí ──► products/<id> ─► eliminarProducto()
 └───────┬─────┘
         │No
         ▼
     ❌ Comando inválido

```
---

📝 Notas

- El proyecto utiliza process.argv para leer los comandos desde la terminal.
- Se implementan validaciones básicas para evitar errores en los parámetros.
- Podés expandirlo fácilmente para agregar PUT (actualizar productos) u otros métodos de la API.

👩‍💻 Autor
Sol Garófalo
🔗 [LinkedIn](https://www.linkedin.com/in/m-sol-garófalo)
