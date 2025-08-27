import { useState , useContext } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { postCalificacionEstrellas } from "../File TS/ApiEstrellas";
import { LocationContext } from "../context/Contexts";

type ValorEstrellasProps = {
  restaurateId: string | null
}

export const ValorEstrellas = ({restaurateId}: ValorEstrellasProps) => {
  const [valor, setValor] = useState(0); // número de estrellas seleccionadas
    const context = useContext(LocationContext)
    console.log(restaurateId)
    console.log(valor)
    if (!context) {
            throw new Error('LocationContext must be used within a LocationProvider');
        }
    const {toggleActualizar} = context
  const manejarClick = async (indice : number) => {
    if (valor === indice + 1) {
      // Si el usuario hace clic en la misma estrella ya seleccionada, la desmarca
      setValor(indice);
    } else {
      // Si hace clic en una nueva estrella, marca hasta esa
      setValor(indice + 1);
    }
    if(!restaurateId){
      throw new Error('restauranteId es undefined o null')
    }
    await postCalificacionEstrellas(restaurateId, indice + 1)
    toggleActualizar()

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  ">
      <div className="flex flex-col items-center justify-center gap-5 w-120 h-50 border-2 border-red-400 rounded bg-[#121212]/80 p-5">
        <h2 className="text-2xl text-white">Puntos de estrellas</h2>
        <div className="flex justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((i) =>
            i < valor ? (
              <IconStarFilled
                key={i}
                size={40}
                className="text-red-500 cursor-pointer"
                onClick={() => manejarClick(i)}
              />
            ) : (
              <IconStar
                key={i}
                size={40}
                className="text-red-500 cursor-pointer"
                onClick={() => manejarClick(i)}
              />
            )
          )}
        </div>
        <p className="text-white">Seleccionaste: {valor} estrella{valor === 1 ? "" : "s"}</p>
      </div>
    </div>
  );
};


