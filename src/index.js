

// function saludar(nombre){
//     return `${nombre} hola mundo`
// }


// const saludar = function(nombre){
//     return `Hola ${nombre}`
// }


const saludar = (nombre = 'Nicolas') =>  `Hola ${nombre}`


// console.log(saludar('Tony'))

console.log(saludar())


const getUser = () => ({uid: 'ABC123', username: 'Tony0001'})

console.log(getUser())


const heroes = [{
    id: 1,
    name: 'Batman'
},
    {
        id: 2,
        name: 'Superman'
}]

// const existe = heroes.some((heroe) => heroe.id === 3 )
// console.log(existe)


const {name} = heroes.find((heroe) => heroe.id === 2 )
console.log(name)