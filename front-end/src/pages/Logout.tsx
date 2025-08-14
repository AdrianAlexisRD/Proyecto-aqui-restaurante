// src/components/Logout.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../File TS/firebase';
import { IconLogout } from '@tabler/icons-react';

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert('Sesión cerrada');
  };

  return <IconLogout className='hover:text-red-500 active:scale-90' size={40} onClick={handleLogout}/>

};

export default Logout;
