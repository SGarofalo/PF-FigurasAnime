import express from "express"
import cors from "cors"
import rutasProductos from "./src/routes/products.routes.js"
import rutasLog from "./src/routes/auth.routes.js"
import { configDotenv } from "dotenv"
//creo el objeto app
const app = express();
//creo el puerto
const PORT = process.env.PORT || 3000;
//creo el objeto de config de cors.
const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

//config. la app de cors p los headers
app.use(cors(corsConfig))
app.use(express.json())
//las rutas de login están antes xq sino no voy a tener un token p esa solicitud
app.use("/api", rutasLog)

//p saber q solicitudes entran al servidor
app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

app.use("/api", rutasProductos)

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})