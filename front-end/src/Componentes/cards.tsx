import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerRestaurantes } from "../File TS/APIconect";
import { IconStar, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import type { JSX } from "react/jsx-runtime";
import { BtnLikes } from "./btnLike";
import { LocationContext } from "../context/Contexts";
import { ValorEstrellas } from "../Componentes/ValorarEstrellas";

type Comentario = {
  usuario: string;
  texto: string;
  fecha: string;
};

interface Restaurantes {
  likes: number;
  _id: string;
  map(
    arg0: (dato: dato, index: number) => JSX.Element
  ): import("react").ReactNode;
  dato: {
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
    telefono: string;
    whatsapp: string;
    likes: number;
    comentarios: Comentario[];
  };
}
type dato = {
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
  telefono: string;
  whatsapp: string;
  likes: number;
  comentarios: Comentario[];
};

export const CardsRestaurant = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("LocationContext must be used within a LocationProvider");
  }
  const [datos, setDatos] = useState<Restaurantes | null>(null);
  const navegar = useNavigate();
  const { actualizar } = context;
  const [aparecerEstrellas, setAparecerEstrellas] = useState(false);
  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState< string | null >(null);

  const obtener = async () => {
    try {
      const data = await obtenerRestaurantes();
      console.log("Restaurantes obtenidos:", data);
      setDatos(data);
    } catch (error) {
      console.error("Error al obtener restaurantes:", error);
    }
  };

  useEffect(() => {
    obtener();
  }, [actualizar]);

  const handleClick = (e: React.MouseEvent) => {
    const nombreRestaurante: string | null =
      e.currentTarget.getAttribute("data-name");
    navegar(`restaurante/${nombreRestaurante}`);
  };

  const removeSelectEstrellas = () =>
    setTimeout(() => setAparecerEstrellas(false), 500);

  if (!datos) return <h2 className="text-white">Cargando...</h2>;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {datos.map((dato: dato, index: number) => (
          <div
            key={index}
            className="bg-[#121212] text-white p-4 rounded-lg 
              xl:w-150 w-[90%] h-80 shadow-lg relative z-0 flex flex-col justify-between
              overflow-hidden group"
          >
            <img
              src={dato.fotos[0]}
              alt=""
              className="absolute z-[-1] opacity-30 w-[100%] 
                right-0 h-80 bottom-0 group-hover:scale-110 
                transition-all duration-300 ease-in-out"
            />

            <h2 className="text-2xl xl:text-3xl font-bold mb-2">
              {dato.nombre}
            </h2>
            <p className="text-[18px] xl:text-xl text-gray-300 mb-1">
              {" "}
              <span className="text-red-500 font-bold">Tipo: </span>{" "}
              {dato.tipoComida}
            </p>
            <p className="text-[18px] xl:text-xl text-gray-300 mb-1">
              {" "}
              <span className="text-red-500 font-bold">Estado: </span>{" "}
              {dato.status}
            </p>
            <p className="text-[18px] text-xl text-gray-300 mb-1">
              <span className="text-red-500 font-bold">Horario: </span>{" "}
              {dato.horario.apertura} - {dato.horario.cierre}
            </p>

            <p className="text-[18px] xl:text-xl text-gray-400">
              <span className="text-red-500 font-bold">Ubicación: </span>{" "}
              {dato.ubicacion}
            </p>
            <div className="flex gap-2 mt-3 text-gray-400 xl:text-xl">
              <div className="flex gap-2 text-[18px]">
                <IconPhone string={3} size={25} className="text-red-500 " />
                {dato.telefono}
              </div>
              <div className="flex gap-2">
                <IconBrandWhatsapp
                  string={3}
                  size={25}
                  className="text-red-500"
                />
                {dato.whatsapp}
              </div>
            </div>
            <div className="flex gap-5 mt-4">
              <button
                className="flex gap-2 font-bold items-center 
                    border-2 border-red-600 rounded-[10px] 
                    pl-4 pr-4 pt-2 pb-2 hover:bg-red-300 bg-red-400/30 hover:text-gray-800 
                    cursor-pointer "
                onClick={() => {
                  setAparecerEstrellas(true);
                  setRestauranteSeleccionado(dato._id);
                }}
              >
                <IconStar className=" text-red-500" stroke={3} size={25} />
                <p className="text-[18px] xl:text-xl font-mono">
                  {" "}
                  {dato.calificacion}{" "}
                </p>
              </button>

              <BtnLikes restaurateID={dato._id} like={dato.likes} />

              <button
                className="pl-4 pr-4 pt-2 pb-2 hover:bg-red-300 bg-red-400/30
                    border-2 border-red-600 rounded-[10px] hover:text-gray-800
                    font-bold "
                onClick={handleClick}
                data-name={dato.nombre}
              >
                ver mas
              </button>
            </div>
          </div>
        ))}

        {aparecerEstrellas && (
          <div className="" onClick={removeSelectEstrellas}>
            <ValorEstrellas restaurateId={restauranteSeleccionado} />
          </div>
        )}
      </div>
    </>
  );
};
