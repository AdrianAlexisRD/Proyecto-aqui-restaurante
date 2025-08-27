import { createContext, type Dispatch, type SetStateAction } from "react";
import type { User } from "firebase/auth";

type ImgContextType = {
  imagenes: string [];
  setImagenes: (url: string[]) => void;
};



interface AuthContextType {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
}

type LocationContextType = {
  location: number[];
  setLocation: (location: number[]) => void;
  actualizar: boolean ;
  setActualizar: Dispatch<SetStateAction<boolean>>;
  toggleActualizar: ()=> void ;
};

export const AuthContext = createContext<AuthContextType>({
  user:null ,
  loginWithGoogle: async () => {
    throw new Error('loginWithGoogle function must be overridden');
  },
});

export const ImgContext = createContext< ImgContextType | null>(null);

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

