const Jokes = require('../models/jokes.model')

//Funcion para obtener todos los chistes
const obtenerChistes = (req, res)=>{
    Jokes.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

//Funcion para obtener un solo chiste
const obtenerUnChiste = (req, res)=>{
    Jokes.findOne(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

//Crear un chiste
const crearChiste =  (req, res)=>{
    Jokes.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

//Actualizar un chiste
const editarChiste = (req, res)=>{
    Jokes.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

//Eliminar un chiste
const eliminarChiste = (req, res)=>{
    Jokes.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerChistes,
    obtenerUnChiste,
    crearChiste,
    editarChiste,
    eliminarChiste

}

