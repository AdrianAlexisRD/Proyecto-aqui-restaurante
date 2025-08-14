// src/components/ImageUploader.tsx
import { useState,useContext, type ChangeEvent, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, } from 'firebase/storage';
import { storage } from '../File TS/firebase'; // Asegúrate que la ruta sea correcta
import { v4 as uuidv4 } from 'uuid';
// import { getAuth, signInAnonymously } from "firebase/auth";
import { ImgContext } from '../context/Contexts';



const CargarImg = () => {
  const context = useContext(ImgContext);
    if (!context) {
    throw new Error("ImgContext debe usarse dentro de un ImgProvider");
  }

  const { setImagenes } = context;

  const [files, setFiles] = useState<File[] | null[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [confirm , setConfirm] = useState<boolean>(false) 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urls: string[] = [];

//hadleFileChange es una función que maneja las vista previa de las imágenes seleccionadas
    const handlePreview = (files: File[]) => {
    const archivos = files
    if (archivos) {
      console.log("Archivos seleccionados:", archivos);
      setFiles([])
      setFiles(archivos);
      setPreview(archivos.map(archivo => URL.createObjectURL(archivo))); // Vista previa local
    }
  };



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const imagenes = e.target.files ;
    if (imagenes && imagenes.length > 0 && imagenes.length <= 3) {
      setFiles(Array.from(imagenes));
      handlePreview(Array.from(imagenes));
      
    }else {
      setError("Selecciona entre 1 y 3 imágenes");
      setFiles([]);
      setPreview([]);
    }
  };


  useEffect(()=>{
     const handleUpload = async (): Promise<void> => {
    if (!files) {
      alert("Selecciona una imagen");
      return;
    }

    for (const file of files as File[]) {
      const imageRef = ref(storage, `imagenes/${uuidv4()}-${file.name}`);
      try {
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        urls.push(url);
        setImagenes(urls);

       console.log('estoy funcionando ')

        setConfirm(true)
        console.log('se subieron las fotos')
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert("Error subiendo imagen: " + error.message);
        } else {
          alert("Error desconocido subiendo imagen");
        }
      }
    }
  };
  handleUpload()
  }, [files, setImagenes, urls])

  return (
    <div className=' flex flex-col gap-4 border p-4 rounded  mt-4'>
      
      {confirm && <h2 className='bg-green-300 text-green-600 border-2 border-green-600 text-2xl text-center'>Imagen subida con éxito</h2>}
      {error && <h2 className="text-lg text-red-500 mb-2">{error}</h2>}
      
      <input className='btn-style' type="file" accept="image/*" multiple onChange={handleChange} />
      

      {preview && (
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {preview.map((img , index ) => (
            <img key={index} src={img} alt={`Preview ${index}`} className="w-64 rounded shadow mb-2" />
          ))}
        </div>
      )}
    </div>

    
  );
};

export default CargarImg;
