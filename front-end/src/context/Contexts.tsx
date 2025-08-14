import { createContext } from "react";

type ImgContextType = {
  imagenes: string [];
  setImagenes: (url: string[]) => void;
};

interface AuthContextType {
  user:{ email: string |null | undefined;}
  loginWithGoogle: () => Promise<void>;
}

type LocationContextType = {
  location: number[];
  setLocation: (location: number[]) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: {
    email: null
  },
  loginWithGoogle: async () => {
    throw new Error('loginWithGoogle function must be overridden');
  },
});
export const ImgContext = createContext< ImgContextType | null>(null);

export const LocationContext = createContext<LocationContextType | undefined>(undefined);


