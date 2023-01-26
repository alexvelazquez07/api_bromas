const ControladorJokes = require('../controllers/jokes.controllers')

module.exports = (app) => {
    app.get('/api/obtenerchistes',ControladorJokes.obtenerChistes)
    app.post('/api/crearchiste',ControladorJokes.crearChiste)
    app.put('/api/editarchiste/:id',ControladorJokes.editarChiste)
    app.delete('/api/eliminarchiste/:id',ControladorJokes.eliminarChiste)
} 