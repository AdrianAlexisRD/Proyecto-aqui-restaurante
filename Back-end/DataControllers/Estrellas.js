import Restaurante from "../Modelos/Restaurante";
import Estrellas from "../Modelos/Estrellas";

export const procesarEstrellas = async (req , res) =>{
    try {
        const nuevasEstrellas = new Estrellas(req.body);
        await nuevasEstrellas.save();
        res.status(200).json(nuevasEstrellas);
    } catch (error) {
        console.error('Error al crear Estrellas', error);
        res.status(500).json({ error: 'Error al crear Estrellas' });  
    }
}