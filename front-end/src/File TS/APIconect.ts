import axios from 'axios';

export const obtenerRestaurantes = async () => {
    try {
        const res = await axios.get('http://localhost:3000/restaurante');
        const data = await res.data;
        console.log('Datos obtenidos:', data);
        return data;
    } catch (error) {
        console.error('Error fetching restaurantes:', error);
        throw error;    
    }
   
}


export const buscarRestaurante = async (nombre: string) => {
    try {
        const res = await axios.get(`http://localhost:3000/buscarRestaurante?nombre=${nombre}`);
        const data = await res.data;
        console.log('Datos obtenidos:', data);
        return data;
    } catch (error) {
        console.error('Error fetching restaurantes:', error);
        throw error;
    }
   
}

