import { Link } from "react-router-dom";
import Logout from '../pages/Logout';
import { useContext, useState } from "react";
import {  AuthContext } from '../context/Contexts';



export const HeaderComponent = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useContext(AuthContext);
  // if (!user) {
  //   throw new Error("user no debe ser nulo");
  // }
  console.log(user)


  return (
    <header className="flex flex-col xl:flex-row bg-[#121212] text-white h-fit w-dvw justify-around items-center xl:p-0 p-4">
      <h1 className="text-2xl font-extrabold">
        <span className="text-red-400">Aquí</span> Restaurant
      </h1>
      <nav className="">
        <ul className="flex flex-wrap items-center space-x-4 font-bold text-red-400 h-[100%]">
          <li>
            <Link
              className="flex items-center text-[18px] hover:text-[#121212] hover:bg-red-500 p-4 h-20"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="flex items-center text-[18px] hover:text-[#121212] hover:bg-red-500 p-4 h-20"
              to="/auth/login&register"
            >
              Log in
            </Link>
          </li>

        
          <li className="relative">
            <div
              onClick={() => setVisible(!visible)}
              className="flex items-center text-[18px] hover:text-[#121212] hover:bg-red-500 p-4 h-20 cursor-pointer"
            >
              Options
            </div>

            <ul
              className={`
                absolute top-full left-0 w-[200px] bg-[#121212] text-white
                flex flex-col gap-2 font-normal z-50 overflow-hidden
                transition-all duration-500 ease-in-out
                ${visible ? 'max-h-40 p-2' : 'max-h-0 p-0'}
              `}
            >
              <li className="hover:text-[#121212] hover:bg-red-500 p-2">
                <Link to="/fotos">Galería</Link>
              </li>
              <li className="hover:text-[#121212] hover:bg-red-500 p-2">
                <Link to="/postearRestaurante">Postear Restaurante</Link>
              </li>
            </ul>
          </li>

          {user && <li><Logout /></li>}
        </ul>
      </nav>
    </header>
  );
};
 