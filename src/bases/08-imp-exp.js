
// import {owners} from "./data/heroes"
import superHeroes from "../data/heroes"

//
// console.log(owners)




// const getHeroeById = (id) => {
//     return superHeroes.find(heroe => heroe.id === id)
// }

export const getHeroeById = (id) => superHeroes.find(heroe => heroe.id === id)

export const getHeroeByOwner = (marca) => superHeroes.filter(heroe => heroe.owner === marca)

