import express from "express"
import { login } from "../controllers/auth.controllers.js"

//creo el objeto rutas
const routes = express.Router()
//creo el endpoint login con metodo post
routes.post("/login", login)

export default routes;