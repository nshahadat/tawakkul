import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnimateCursor from './components/AnimateCursor';
import ProgressBar from './components/ProgressBar';
import Fabrics from './pages/Fabrics';
import IT from './pages/IT';
import Lifestyle from './pages/Lifestyle';
import Property from './pages/Property';
import Tawakkul from './pages/Tawakkul';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsApp from './components/WhatsApp';
import Portfolio from './pages/Portfolio';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Routes>
          <Route path='/' element={<Tawakkul />}/>
          <Route path='/home' element={<Tawakkul />}/>
          <Route path='/it' element={<IT />}/>
          <Route path='/lifestyle' element={<Lifestyle />}/>
          <Route path='/property' element={<Property />}/>
          <Route path='/fabrics' element={<Fabrics />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>

      <ProgressBar />
      <AnimateCursor />
      <WhatsApp />

    </div>
  );
}

export default App;
