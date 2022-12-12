
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 49,
    direccion: {
        ciudad: 'New York',
        zip: '522564',
        lat: 42.365,
        long: 31.254
    }
}

const persona2 = {...persona}

persona2.nombre= 'Peter'

console.log(persona)
console.log(persona2)





