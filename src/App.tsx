import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import './input.css'

// import backgroundSvg from './assets/Background_svg.svg'

export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}