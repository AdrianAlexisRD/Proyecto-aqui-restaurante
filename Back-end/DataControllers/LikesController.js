import Like from '../Modelos/Like.js';
import Restaurante from '../Modelos/Restaurante.js';

export const darLike = async (req, res) => {
  console.log('funciono')
  try {
    const { userEmail, restauranteId } = req.body;
    console.log(userEmail , restauranteId)
    if (!userEmail) {
      return res.status(400).json({ message: "El correo es obligatorio" });
    }

    const restaurante = await Restaurante.findByIdAndUpdate(
      restauranteId,
      { likes: 1 , status: 'inactivo' , calificacion: 4.5} // Incrementa en 1 el campo likes
      
    );

    if (!restaurante) {
      return res.status(404).json({ message: "Restaurante no encontrado" });
    }

    res.status(200).json({
      message: "Like actualizado",
      likes: restaurante.likes
    });
  } catch (error) {
    console.error("Error al actualizar like:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};


export const crearLike = async (req, res) => {
  try {
    const { userEmail, restauranteId } = req.body;
    if(userEmail){
      const restaurante = await Restaurante.findById(restauranteId);
      const data = restaurante.toJSON()
      console.log(data.likes)
      data.likes = data.likes += 1;
      await restaurante.save();
      return res.status(200).json({ message: 'Like actualizado'});
    }
    return res.status(404).json({ message: "Restaurante no encontrado" });
  
  } catch (error) {
    console.error('Error al crear like:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};


