import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

 export function DefaultPage() {
  return (
    <div className="bg-background h-screen overflow-auto "> 
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

