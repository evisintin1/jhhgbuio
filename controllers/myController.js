const OneModel = require("../models/myModel");
const moment = require("moment");

//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render("index");
    console.log("hola");
};

const msg = new adminSchema({
    nombre:"admin",
    apellido:"1",
    usuario:"Admin1",
    contraseña:"administrador",
    avatar:"...",
    email:"adminhospital@gmail.com"
  })

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })