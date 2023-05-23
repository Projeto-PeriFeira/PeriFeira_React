import React from 'react'
import './App.css'
import Navbar from './componentes/estaticos/Navbar/Navbar';
import Home from './paginas/home/Home'
import Footer from './componentes/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Loja from './paginas/loja/Loja';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/home' element={<Home/>}/>
					<Route path='/sobre' element={<Sobre/>}/>
					<Route path='/loja' element={<Loja/>}/>
					<Route path='/cadastro' element={<CadastroUsuario/>}/>
				</Routes>
			<Footer/>
		</BrowserRouter>
);
}

export default App;
