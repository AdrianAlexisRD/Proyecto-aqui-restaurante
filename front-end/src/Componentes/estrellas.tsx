import { IconStar } from "@tabler/icons-react"


export const  Estrellas = () =>{
    return(
        <>
        <button className="btn-style">
            <IconStar className=' text-red-500' stroke={3} size={25} />
            <p className="text-[18px] xl:text-xl font-mono"> 5 </p>          
        </button>
        </>
    )
}