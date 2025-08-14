import Login from "../Componentes/Login";
import Register from "../Componentes/Register";

import { useState } from "react"

export const LoginResgister = () =>{
    const [change , setChange] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col text-white h-dvh w-dvw justify-center font-extrabold">
            <img src="https://tableo.com/wp-content/uploads/Restaurant-Stock-Images-e1699951587809.webp" alt="" className='absolute w-full h-full opacity-40'/>
            <div className="form h-80 z-10">
                {change === false? <Login/> : <Register/>}
            <button 
            className="font-medium text-red-400 text-[20px] hover:text-red-500 cursor-pointer"
            onClick={()=>change === false ?setChange(true): setChange(false)}>{change === false? 'Register':  'Login'}</button>

            </div>
        </div>
    )
}