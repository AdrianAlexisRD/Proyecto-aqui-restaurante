import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../File TS/firebase'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const navegar = useNavigate()



  const handleRegister = async () => {
    console.log(email)
    console.log(password)

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registro exitoso');
      setEmail('')
      setPassword('')
      navegar('/')

    } catch (error: unknown) {
      setError(true)
      console.log(error);
    }
 
  };

  return (
    <>
      {error&& <h3 className='text-2xl text-red-400 font-bold text-center'>Contraseña o usuario incorrecto</h3>} 
        <h2 className='text-2xl'>Registro</h2>

        <input className='border p-1 rounded w-90' 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        

        <input className='border p-1 rounded w-90' 
        placeholder="Password" 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

        <button className='btn-style' onClick={handleRegister}>Submit</button>

    </>
  );
};

export default Register;
