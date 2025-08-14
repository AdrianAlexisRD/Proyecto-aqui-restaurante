// src/components/Login.tsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../File TS/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const navegar = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sesión iniciada');
      navegar('/')
    } catch (error: unknown) {
      setError(true)
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Ocurrió un error desconocido');
      }
    }
  };

  return (
    <>
      {error&& <h3 className='text-2xl text-red-400 font-bold text-center'>Contraseña o usuario incorrecto</h3>} 
            <h2 className='text-2xl'>Iniciar Sesión</h2>
            <input className='border p-1 rounded w-90 '   placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className='border p-1 rounded w-90 ' placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button className='btn-style  text-white rounded' onClick={handleLogin}>Submit</button>
    </>
  );
};

export default Login;
