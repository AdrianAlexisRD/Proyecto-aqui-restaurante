import Restaurante from '../Modelos/Restaurante.js';

export const crearRestaurante = async (req, res) => {
  try {
   console.log(req.body)

    const nuevoRestaurante = new Restaurante(req.body);
    await nuevoRestaurante.save();
    res.status(201).json(nuevoRestaurante);
  } catch (error) {
    console.error('Error al crear restaurante:', error);
    res.status(500).json({ error: 'Error al crear restaurante' });
  }
};

export const obtenerRestaurantes = async (req, res) => {
  try {
    const restaurantes = await Restaurante.find();
    res.status(200).json(restaurantes);
  } catch (error) {
    console.error('Error al obtener restaurantes:', error);
    res.status(500).json({ error: 'Error al obtener restaurantes' });
  }
};

export const BuscarRestaurante = async (req , res) =>{
  const{ nombre } = req.query;
  // console.log(nombre)
    
  try {
    const restaurante = await Restaurante.findOne({nombre: nombre})
    // console.log(restaurante)
    res.status(200).json(restaurante)
  } catch (error) {
    console.log(error)
    res.status(400).json({error : 'Error al encontrar el restaurante'})
  }

}



// const restaurantes = [
// ]

// const subirDatos = async () =>{
//   await Restaurante.insertMany(restaurantes);
// }

// subirDatos()