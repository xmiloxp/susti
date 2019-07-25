var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var deudorSchema = new mongoose.Schema({
  nombre: {type:String},
  apellido: {type:String}, 
  deuda: {type:Number},
  cancelado: {type: Boolean,default: false}
});

module.exports = mongoose.model("Deudor", deudorSchema);