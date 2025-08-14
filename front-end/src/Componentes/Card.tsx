import { useEffect, useState } from 'react';
import { MapaGoogle } from './mapas';
import { buscarRestaurante } from '../File TS/APIconect';
import { IconStar, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';
import { BtnLikes } from './btnLike';
import { useParams } from 'react-router-dom';

type Comentario = {
  usuario: string;
  texto: string;
  fecha: string;
};

interface Restaurante {
  _id: string;
  nombre: string;
  status: string;
  horario: {
    apertura: string;
    cierre: string;
  };
  fotos: string[];
  descripcion: string;
  tipoComida: string;
  calificacion: number;
  location: number[];
  ubicacion: string;
  telefono: string,
  whatsapp: string,
  likes: number;
  comentarios: Comentario[];
}

export const Card = () => {
  const [datos, setDatos] = useState<Restaurante | null>(null);
  const {name}= useParams< string >()
  
  useEffect(() => {
    if(!name) return ;
    const obtener = async () => {
      const data = await buscarRestaurante(name);
      setDatos(data);
    };
    obtener();
  }, [name]);

  if (!datos) return <h2 className="text-white">Cargando...</h2>;

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      <div key={datos._id} className="bg-[#121212] text-white p-4 rounded-lg xl:w-150 w-[90%] shadow-lg">
        <h2 className="text-2xl xl:text-3xl font-bold mb-2">{datos.nombre}</h2>
        <div className="mt-3 flex flex-col gap-3 overflow-hidden ">
          <img src={datos.fotos[0]} className="w-full h-40 object-cover rounded hover:scale-105 transition-all duration-300 ease-in"/>
          <div className='flex gap-2'>
            <img src={datos.fotos[1]} className="w-[50%] h-40 object-cover rounded hover:scale-105 transition-all duration-300 ease-in"/>
            <img src={datos.fotos[2]} className="w-[50%] h-40 object-cover rounded hover:scale-105 transition-all duration-300 ease-in"/> 
          </div>
        </div>

        <p className="text-sm xl:text-xl text-gray-300 mb-1"> <span className='text-red-400 font-bold'>Tipo: </span> {datos.tipoComida}</p>
        <p className="text-sm xl:text-xl text-gray-300 mb-1"> <span className='text-red-400 font-bold'>Estado: </span> {datos.status}</p>
        <p className="text-sm xl:text-xl text-gray-300 mb-1">
         <span className='text-red-400 font-bold'>Horario: </span> {datos.horario.apertura} - {datos.horario.cierre}
        </p>
        <div className='flex gap-5'>
          <div className='flex gap-2 font-bold items-center'>
            <IconStar className=' text-red-400' stroke={3}size={25}/>
            <p className="text-[18px] xl:text-xl font-mono"> {datos.calificacion} </p>
          </div>
          <BtnLikes restaurateID={datos._id}/>
        </div>
        <p className="mb-2 xl:text-xl text-red-400">{datos.descripcion}</p>
        
        <p className="text-sm xl:text-xl text-gray-400">
          <span className='text-red-400 font-bold'>Ubicación: </span> {datos.ubicacion}</p>
        <div className='flex gap-2 mt-3 text-gray-400 xl:text-xl'>
          <div className='flex gap-2'>
            <IconPhone string={3} size={25} className='text-red-400'/>
            {datos.telefono}
          </div>
          <div className='flex gap-2'>
            <IconBrandWhatsapp string={3} size={25} className='text-red-400'/>
            {datos.whatsapp}
          </div>

        </div>



        <div className="mt-4">
          <h3 className="font-semibold mb-1">Comentarios:</h3>
          {datos.comentarios.map((comentario, i) => (
            <div key={i} className="text-sm text-gray-300 border-t border-gray-600 pt-1">
              <strong>{comentario.usuario}</strong>: {comentario.texto} <br />
              <em className="text-xs text-gray-500">({comentario.fecha})</em>
            </div>
          ))}
        </div>
      </div>
        <MapaGoogle location={datos.location}/>
    </div>
  );
};


