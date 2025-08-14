import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI 



export  const conectarMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Conectado a MongoDB con Mongoose');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};
