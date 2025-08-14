import { useState, type ReactNode } from 'react';
import { LocationContext } from './Contexts';

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  
  const [location, setLocation] = useState<number[]>([]);
  console.log(location)

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

