import { useContext, useEffect, useRef, useState } from "react";
import { ImgContext } from "../context/Contexts";
import { LocationContext } from "../context/Contexts";
import Ubicacion from "../Componentes/location";
import CargarImg from "../Componentes/CargarImg";
import axios from "axios";


type Comentario = {
  usuario: string;
  texto: string;
  fecha: string;
};

export interface Restaurante {
  nombre: string;
  status: 'activo' | 'inactivo';
  horario: {
    apertura: string;
    cierre: string;
  };
  fotos: string[];
  descripcion?: string;
  tipoComida: string;
  calificacion: number;
  location?: number[]
  telefono?: string;
  whatsapp?: string;
  ubicacion: string;
  likes?: number;
  comentarios?: Comentario[] | [];
}

export const PostRestaurante = () => {
  const contextImg = useContext(ImgContext);
  if (!contextImg) {
  throw new Error("contextImg no debe ser nulo");
  }
  const contextLocation = useContext(LocationContext);
  if (!contextLocation) {
  throw new Error("contextLocation no debe ser nulo");
  }

  const { imagenes } = contextImg

  const { location } = contextLocation

  console.log(location)

  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Restaurante>({
    nombre: "",
    status: "activo",
    horario: {
      apertura: "06:00 pm",
      cierre: "12:00 pm"
    },
    fotos: [],
    descripcion: "",
    ubicacion: "",
    location: [0 , 0],
    tipoComida: "",
    calificacion: 5,
    likes: 0,
    telefono: "",
    whatsapp: "",
    comentarios: []
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      fotos: imagenes,
      location: [location[0], location[1]]
    }));
  }, [imagenes, location]);

  const postAxios =  async () => {
    console.log(formData)
    try {
      const res = await axios.post('http://localhost:3000/restaurante', formData)
      const result = await res.data
      console.log('se realizo post correctamente' + result)
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formDataObject = Object.fromEntries(new FormData(formRef.current).entries());

    if (imagenes.length > 0 && location) {
      const nuevoRestaurante: Restaurante = {
        ...formData,
        nombre: formDataObject.nombre as string,
        tipoComida: formDataObject.tipoComida as string,
        ubicacion: formDataObject.ubicacion as string,
        telefono: formDataObject.telefono as string,
        whatsapp: formDataObject.whatsapp as string,
        descripcion: formDataObject.descripcion as string,
        horario: {
          apertura: formDataObject.horarioApertura as string || "06:00 pm",
          cierre: formDataObject.horarioCierre as string || "12:00 pm"
        },
        fotos: imagenes,
        location:  [location[0], location[1]]
      };

      setFormData(nuevoRestaurante);
      console.log("Restaurante enviado:", nuevoRestaurante);
       postAxios()
    } else {
      setError(" Debes completar todos los campos.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#121212] mt-8 mb-8 rounded shadow-md">
     
      <h3 className="text-2xl text-red-500">{error}</h3>
      <h1 className="text-3xl font-bold mb-4">Publicar Restaurante</h1>

      <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          placeholder="Nombre del Restaurante"
          name="nombre"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Tipo de Comida"
          name="tipoComida"
          required
          className="w-full p-2 border rounded"
        />

        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Horario de Apertura"
            name="horarioApertura"
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Horario de Cierre"
            name="horarioCierre"
            className="w-full p-2 border rounded"
          />
        </div>

        <input
          type="text"
          placeholder="Dirección"
          name="ubicacion"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Teléfono"
          name="telefono"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="WhatsApp"
          name="whatsapp"
          className="w-full p-2 border rounded"
        />

        <Ubicacion />
        <CargarImg />

        <textarea
          placeholder="Descripción"
          name="descripcion"
          className="w-full p-2 border rounded"
          rows={4}
        ></textarea>

        <button type="submit" className="btn-style">
          Publicar
        </button>
      </form>
    </div>
  );
};
