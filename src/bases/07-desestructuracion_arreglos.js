
const characters = ['Goku','Vegeta','Trunks']

// const goku = characters[0]
// const vegeta = characters[1]
// const trunks = characters[2]
//
// console.log(goku,vegeta,trunks)

const [g,v,t] = characters
console.log(g,v,t)

const [,,tr] = characters
console.log(tr)

const [go,ve,tu, goten = 'No tiene valor'] = characters
console.log(goten)
//
// const returnArray = () => {
//     return ['ABC',123]
// }
//
// const [l, n] = returnArray()
// console.log(l,n)
//

const returnArray = ([l,n]) => {
    return [l,n]
}

const [l, n] = returnArray(['ABC',123])
console.log(l,n)