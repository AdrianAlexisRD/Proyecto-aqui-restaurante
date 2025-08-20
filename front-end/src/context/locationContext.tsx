import { useState, type ReactNode } from 'react';
import { LocationContext } from './Contexts';

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  
  const [location, setLocation] = useState<number[]>([]);
  const [actualizar , setActualizar] = useState<boolean>(true)
  console.log(location)

  return (
    <LocationContext.Provider value={{ location, setLocation , actualizar, setActualizar }}>
      {children}
    </LocationContext.Provider>
  );
};

