import React from 'react'
import Footer from './componentes/estaticos/footer/Footer';
import './App.css'
import Home from './paginas/home/Home'
import Navbar from './componentes/estaticos/Navbar/Navbar';

function App() {
  return (
	<>

    <Navbar/>
	<Home />
	<Footer/> 

	</>
  );
}

export default App;
