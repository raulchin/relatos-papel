import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Anime } from './components/Anime';
import { Movies } from './components/Movies';


function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <Header title = "Relatos de Papel" subtitle = "Home Page"/>
        <Anime />
        <Movies />
        <Footer/>        
      </div>
  );
}

export default App
