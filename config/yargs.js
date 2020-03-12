
const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear','Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar','Actualiza el estado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar','Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }