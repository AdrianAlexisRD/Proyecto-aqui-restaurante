import { useState, type ReactNode } from 'react';
import { LocationContext } from './Contexts';

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  
  const [location, setLocation] = useState<number[]>([]);
  const [actualizar , setActualizar] = useState<boolean>(true)
  console.log(location)
    const toggleActualizar = () => {
    setActualizar(prev => !prev);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation , actualizar, setActualizar, toggleActualizar }}>
      {children}
    </LocationContext.Provider>
  );
};

