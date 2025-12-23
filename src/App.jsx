import React from "react";
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
      <div>
        <Header title = "Relatos de Papel" subtitle = "Bienvenidos a Relatos de Papel"/>
        <AppRoutes/>
        <Footer/>        
      </div>
  );
}

export default App;
