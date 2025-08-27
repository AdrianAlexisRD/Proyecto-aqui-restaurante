import { AuthContext, LocationContext } from "../context/Contexts";
import { giveLike } from "../File TS/ApiLikes";
import { useContext, useState } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type Props = {
  restaurateID: string;
  like: number;
};

export const BtnLikes = ({ restaurateID, like }: Props) => {
  const { user } = useContext(AuthContext);
  const email: string | null | undefined = user?.email;
  const [likeado, setLikeado] = useState(false);
  const navegar = useNavigate();
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("LocationContext must be used within a LocationProvider");
  }
  const { toggleActualizar } = context;

  const handleClick = async (): Promise<void> => {
    if (!email) return navegar("auth/login&register");
    await giveLike(email, restaurateID);
    toggleActualizar();
    setLikeado(true);
  };

  return (
    <div
      className="flex gap-2 font-bold
         xl:font-mono font-mono items-center"
    >
      <button
        className="flex gap-2 font-bold xl:font-mono font-mono items-center 
            border-2 border-red-600 rounded-[10px]  hover:cursor-pointer
            pl-4 pr-4 pt-2 pb-2 hover:bg-red-300 bg-red-400/30 hover:text-gray-800 "
        onClick={handleClick}
      >
        {!likeado ? (
          <IconHeart
            className="text-red-600 active:scale-90"
            stroke={3}
            size={25}
          />
        ) : (
          <IconHeartFilled
            className="text-red-600 active:scale-90"
            stroke={3}
            size={25}
          />
        )}
        <p className="text-gray-300 text-[18px] xl:text-2xl">{like}</p>
      </button>
    </div>
  );
};
