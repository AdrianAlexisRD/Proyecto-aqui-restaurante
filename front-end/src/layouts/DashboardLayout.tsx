// src/layouts/DashboardLayout.tsx
import { Outlet} from 'react-router-dom';
import { HeaderComponent } from '../Componentes/Header';

const DashboardLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
