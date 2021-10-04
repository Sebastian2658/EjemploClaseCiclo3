const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const database = require("./database");
const cors = require("cors")
const bodyparser = require("body-parser")

mongoose.Promise = global.Promise;
mongoose.connect(
    database.Ddprincipal,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(
    () => console.log("Conectado con exito"),
    (error) => console.log("Error en conección"),
);

const app = express();
app.use(bodyparser.json());
app.use(
 bodyparser.urlencoded({
 extended: false,
 })
);

app.use(cors());

const routesProducts = require("./routers/productos.route");
app.use("/productos",routesProducts);

const server = app.listen(8000,()=>console.log("Conectado"));