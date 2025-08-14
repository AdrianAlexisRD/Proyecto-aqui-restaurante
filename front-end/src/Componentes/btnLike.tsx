import { AuthContext } from "../context/Contexts";
import { giveLike } from "../File TS/ApiLikes";
import { useState, useContext } from "react"
import { IconHeart } from '@tabler/icons-react';

type Props = {
    restaurateID: string ;
}


export const BtnLikes = ({restaurateID}: Props ) =>{
    const { user } = useContext(AuthContext);
    
    console.log(user)
    const [count , setCount] = useState<number>(0)
    const [clickeado , setClikeado] = useState<boolean>(true)


    const handleClick = (): void =>{
        console.log(user.email + ' ' + ' '+ restaurateID )
        if(clickeado) setCount(count+1);
        setClikeado(false)
        if(!user.email) return console.log('error capturando user o id del restaurante ');
            giveLike(user.email , restaurateID)
    } 

    
    return(
        <div className='flex gap-2 font-bold
         xl:font-mono font-mono items-center'>

            <button className='flex gap-2 font-bold xl:font-mono font-mono items-center 
            border-2 border-red-600 rounded-[10px]  hover:cursor-pointer
            pl-4 pr-4 pt-2 pb-2 hover:bg-red-300 bg-red-400/30 hover:text-gray-800 'onClick={handleClick}>
            <IconHeart className='text-red-600 active:scale-90' stroke={3} size={25} />
            <p className='text-gray-300 text-[18px] xl:text-2xl'>{count}</p>
            </button>
        </div>
    )
}