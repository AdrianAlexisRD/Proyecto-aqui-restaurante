import { AuthContext } from "../context/Contexts";
import { CardsRestaurant } from "../Componentes/cards";
import aquiRestauranImg from "../assets/aqui-restaurante.jpg";
import { useContext } from "react";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex flex-col items-center ">
      <div className="overflow-hidden flex justify-center xl:h-140 h-120 xl:w-[65%] relative group">
        <img
          src={aquiRestauranImg}
          alt=""
          className="  w-[95%] xl:h-150 mt-5 rounded opacity-75 group-hover:opacity-20 "
        />
        <div className="absolute flex-col justify-center
         h-full w-100 xl:w-200 text-md text-red-200 gap-4 group-hover:opacity-100 
         xl:text-2xl pt-4 group-hover:flex opacity-0 
           ">
          <h2 className="text-center font-bold text-red-400 xl:text-3xl text-2xl ">Bienvenido a Aquí Restaurante</h2>
          <h3 className="font-extrabold">Tu guía gastronómica en Puerto Plata</h3>
          <p>
            ¿No sabes dónde comer hoy? ¡Nosotros te ayudamos! En Aquí
            Restaurante reunimos los mejores lugares para comer en Puerto Plata:
            desde comederos familiares y puestos tradicionales hasta restaurantes
            de alta cocina. Explora una gran variedad de sabores, conoce cada
            local con sus fotos, horarios, ubicación, contacto directo y
            opiniones reales de otros comensales. <br /><br />
            Tu próximo plato favorito está más cerca de lo que piensas.
          </p>
          <ul className="font-bold">
            <h3 className="font-extrabold">Aquí Restaurante</h3>
            <li className="text-red-300 ml-4">Descubre</li>
            <li className="text-red-300 ml-4">elige</li>
            <li className="text-red-300 ml-4">disfruta</li>
          </ul>
          
        </div>
      </div>
      {user ? (
        <p>Bienvenido, {user.email}</p>
      ) : (
        <p>No hay usuario autenticado</p>
      )}

      <CardsRestaurant />
    </div>
  );
};

export default UserInfo;
