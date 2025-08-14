import { useState, type ReactNode } from 'react';
import { ImgContext } from './Contexts';

export const ImgProvider = ({ children }: { children: ReactNode }) => {
  const [imagenes, setImagenes] = useState<string[]>([]);
  console.log("Contexto de imágenes inicializado:", imagenes);


  return (
    <ImgContext.Provider value={{ imagenes, setImagenes: (url: string[]) => setImagenes((prev) => [...prev, ...url]) }}>
      {children}
    </ImgContext.Provider>
  );
};

