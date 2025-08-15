
import Estrellas from "../Modelos/Estrellas.js";

export const procesarEstrellas = async (req , res) =>{
    const { restauranteId , puntosEstrellas } = req.body
    console.log(restauranteId +' '+ puntosEstrellas)
    try {
        const restauranteGuardado = await Estrellas.restauranteId.findOne(restauranteId)
        if(restauranteGuardado){
            await Estrellas.updateOne(
                {restauranteId: restauranteId},
                {$push:{puntosEstrellas: puntosEstrellas}}
            )
            return
        }
        const nuevasEstrellas = new Estrellas(req.body);
        await nuevasEstrellas.save();
        res.status(200).json(nuevasEstrellas);
    } catch (error) {
        console.error('Error al crear Estrellas', error);
        res.status(500).json({ error: 'Error al crear Estrellas' });  
    }
}