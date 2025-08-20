import {BrowserRouter , Route, Routes} from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout';
import { AuthProvider } from './context/aunthContext';
import { ImgProvider } from './context/imgContext';
import { LocationProvider } from './context/locationContext';
import { LoginResgister } from './pages/login&Register';
import GaleriaFirebase from './pages/obtenerImg';
import { PostRestaurante } from './pages/formRestaurante';
import { Card } from './Componentes/Card';

import UserInfo from './pages/UserInfo';

function App() {
  return (
    <AuthProvider>
      <ImgProvider>
        <LocationProvider>  
          <BrowserRouter>
            <Routes>
              <Route  element={<DashboardLayout />}>
                  <Route path="/fotos" element={<GaleriaFirebase />} />
                  <Route path="" element={<UserInfo />} />
              <Route path="auth/login&register" element={<LoginResgister />} />
              <Route path="/" element={<UserInfo />} />
              <Route path='/restaurante/:name' element={<Card/>}/>
              <Route path="/postearRestaurante" element={<PostRestaurante />} />
              <Route path="*" element={<h1 className='text-red-500 text-3xl text-center'>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </LocationProvider>
      </ImgProvider>
    </AuthProvider>
  );
}

export default App;
