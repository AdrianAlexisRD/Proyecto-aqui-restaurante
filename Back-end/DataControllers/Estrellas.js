import Restaurante from '../Modelos/Restaurante.js';
import Estrellas from "../Modelos/Estrellas.js";

// funcion que calcula el promedio de todos los puntos de estrellas de un restaunte
const promedioEstrellas = (estrellas) =>{
                let total = 0
                let promedioTotal = 0
                estrellas.puntosEstrellas.forEach(n => total = n + total)
                promedioTotal = parseFloat((total/estrellas.puntosEstrellas.length).toFixed(1))                    
            console.log(promedioTotal)
            return promedioTotal
}

export const procesarEstrellas = async (req , res) =>{
    const { restauranteId , puntosEstrellas } = req.body
    console.log(restauranteId +' '+ puntosEstrellas)

    if(puntosEstrellas<0 || puntosEstrellas>5){
        return res.status(400).json('estrella menor a 0 o mayor 5')
    }
// actualizar calificacion de estrellas
    try {
        const restauranteGuardado = await Estrellas.findOne({restauranteId})
        if(restauranteGuardado){
            await Estrellas.updateOne(
                {restauranteId: restauranteId},
                {$push:{puntosEstrellas: puntosEstrellas}}
            )
            const valuetStar = await Estrellas.findOne({restauranteId})

            await Restaurante.findByIdAndUpdate(
            restauranteId,{calificacion: promedioEstrellas(valuetStar)}
            )
            return res.status(200).json('promedio actualizado correctamente')
        }

// si el todavia no se habia registrado calificacion de estrellas se genera un nuevo registro
        const nuevasEstrellas = new Estrellas(req.body);
        await nuevasEstrellas.save();
        res.status(201).json(nuevasEstrellas);


    } catch (error) {
        console.error('Error al crear Estrellas', error);
        res.status(500).json({ error: 'Error al crear Estrellas' });  
    }
}


export const getEstrellas =  async (req , res) =>{

    try {
        const estrellas = await Estrellas.find()
        
        const promedioObjeto = {} 
        estrellas.forEach(element => {
                let total = 0
                let promedioTotal = 0
                element.puntosEstrellas.forEach(n => total = n + total)
                promedioTotal = parseFloat((total/element.puntosEstrellas.length).toFixed(1))
                promedioObjeto[element.restauranteId] = promedioTotal
            });
            console.log(promedioObjeto)

            res.status(200).json(promedioObjeto);
        
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
} 

