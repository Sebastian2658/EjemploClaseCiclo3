const express = require("express");
const prodctroute = express.Router();
const ModeloProducto = require("../Modelos/productos") 

prodctroute.route("/").get((req,res)=> {
    console.log("Se dio la conexión")
    res.send("Conectado")
});

prodctroute.route("/consultarproducto").get((req,res) => {
    ModeloProducto.find((Error, data) =>{
        res.json(data);
    });
});

prodctroute.route("/crearproducto").post((req,res) => {
    ModeloProducto.create(req.body,(Error, data) =>{
        res.json(data);
    });
});

prodctroute.route("/buscarproducto/:id").get((req, res) => {
    ModeloProducto.findById(req.params.id, (error, data, next) => {        
            res.json(data);        
    });
});

prodctroute.route("/update-product/:id").put((req, res, next) => {
    ModeloProducto.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            
                res.json(data);
            
        }
    );
});

prodctroute.route("/delete-producto/:id").delete((req, res, next) => {
    ModeloProducto.findByIdAndRemove(req.params.id, (error, data) => {
    if(error){
        console.log("error");
    }
        res.json(data);
    });
});

module.exports = prodctroute;