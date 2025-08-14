import  { useEffect, useState } from "react";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../File TS/firebase";

const GaleriaFirebase = () => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const carpetaRef = ref(storage, "imagenes");
        const listado = await listAll(carpetaRef);
        const urlsDescarga = await Promise.all(
          listado.items.map((item) => getDownloadURL(item))
        );
        setUrls(urlsDescarga);
      } catch (error) {
        console.error("Error obteniendo imágenes:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {urls.map((url) => (
        <img key={url} src={url} alt="Imagen de Firebase" className="w-full h-auto rounded" />
      ))}
    </div>
  );
};

export default GaleriaFirebase;


    





