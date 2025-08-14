import { useState, useContext } from "react";
import { IconMapPin } from '@tabler/icons-react';
import { LocationContext } from "../context/Contexts";
import { MapaGoogle } from "./mapas";

type Coordenadas = number[];



export default function Ubicacion() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('LocationContext must be used within a LocationProvider');
  }
  const { setLocation } = context;
  const [ubicacion, setUbicacion] = useState<Coordenadas | null>(null);
  const [error, setError] = useState<string | null>(null);

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      setError("La geolocalización no está soportada por tu navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUbicacion([ latitude, longitude ]);
        setLocation([latitude, longitude])
      },
      (err) => {
        setError(`Error obteniendo la ubicación: ${err.message}`);
      }
    );
  };

  console.log(ubicacion)

  return (
    <div className="p-4 rounded ">
       < IconMapPin className="text-red-500 mb-2 active:scale-90" size={40} onClick={obtenerUbicacion} />

      <h2 className="text-lg font-bold mb-2">Tu Ubicación Actual</h2>
      {error && <p className="text-red-500">{error}</p>}

      {ubicacion ? (
        
        <div>
          <p><strong>Latitud:</strong> {ubicacion[0]}</p>
          <p><strong>Longitud:</strong> {ubicacion[1]}</p>
        </div>
      ) : !error ? (
        <p>Obteniendo ubicación...</p>
      ) : null}
        {ubicacion && <MapaGoogle location={ubicacion} />}


    </div>
  );
}
