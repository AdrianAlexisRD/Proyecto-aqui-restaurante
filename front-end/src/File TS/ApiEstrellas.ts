import axios from 'axios'

export const postCalificacionEstrellas = async (restauranteId : string , puntos : number ) =>{
    console.log(`soy la el post mis datos son ${restauranteId} y ${puntos}`)
    try {
        const res = await axios.post('http://localhost:3000/estrellas',
            {restauranteId: restauranteId , puntosEstrellas: puntos}
         )
        const data = await res.data
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}