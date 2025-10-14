// const express = require("express");
import express from "express";

import usuarioRoutes from "./routes/usuariosRoutes.js";

// Crear APP:
const app = express();

//Habilitamos pug:
app.set("view engine", "pug");
app.set("views", "./views");


// Routing
app.use("/auth", usuarioRoutes);



// app.get("/", function(req, res){
//     res.send("Hola mundo desde express");
// });

// app.get("/nosotros", function(req, res){
//     res.send("Nosotros");   
// });

// app.get("/contacto", function(req, res){
//     res.send("Este es mi contacto");   
// });

// Definir el puerto
const port = 3000;

app.listen(port,()=> {
    console.log("El servidor se esta corriendo en el puerto: "+ port);
});