/*
const options = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
*/

const descripcion = {
    demand: true,
    alias: 'd',
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estad completado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea por hacer', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}