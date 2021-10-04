const mongoose  = require("mongoose");
const schema = mongoose.Schema;
let schemaProducts = new schema(
    {
        namePro:{
            type: String,
        },
        ref:{
            type: String, 
        },
        price:{
            type: Number,
        }
    },{
        collection: "inventario"
    }
);

module.exports = mongoose.model("products",schemaProducts);