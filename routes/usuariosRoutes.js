import express from "express";
import {formularioLogin, formularioRegistro} from "../controllers/usuariosController.js";
const router = express.Router();

// router
//     .route("/")
//     .get(function(req, res){
//         res.send("hola mundo desde express");
//     })
//     .post(function(req, res){
//         res.send("Mensaje encontrado");
//     });

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);


export default router;