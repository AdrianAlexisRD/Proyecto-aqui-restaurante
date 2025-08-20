import axios from "axios"
// let confirmarLike: boolean = true
import { obtenerRestaurantes } from "./APIconect";

export const giveLike = async (userEmail: string , restauranteId: string) =>{

    console.log(restauranteId , userEmail)

    try {
        // if(confirmarLike){
        const res = await axios.patch('http://localhost:3000/likes', {userEmail: userEmail , restauranteId: restauranteId});
        const data = await res.data;
        console.log(data)
        await obtenerRestaurantes()
        // confirmarLike = false
        // }
    } catch (error) {
        console.log(error)
        throw error
    }

}

// type likes = {
//     cantidad : number, 
//     fecha: string , 
    
// }


// export const getLikes = async () =>{
// //     type elementoLike = {
// //     cantidad:number
// // }
//     let total = 0
//     try {
//         const res = await axios.get('http://localhost:3000/likes');
//         const data = await res.data;
//         console.log(data)
//         data.forEach((element: { cantidad: number; })  => {
//            total =  element.cantidad + total
//         });
//         console.log(total)
//     } catch (error) {
//         console.log(error)
//         throw error
//     }

// }