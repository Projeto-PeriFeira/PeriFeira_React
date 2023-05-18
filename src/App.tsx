import React from 'react'
import './App.css'
import Navbar from './componentes/estaticos/Navbar/Navbar';
import Home from './paginas/home/Home'
import Footer from './componentes/estaticos/footer/Footer';

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
