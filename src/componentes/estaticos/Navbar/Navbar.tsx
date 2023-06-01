import React, { useEffect, useState } from 'react'
import { Grid, AppBar, Modal, Container, Toolbar, Typography, Box, Button, Menu, MenuItem, Avatar } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { buscaId } from '../../../services/Service'
import { Usuario } from '../../../model/Usuario'
import NavbarLogado from '../../../componentes/estaticos/Navbar-logado/NavbarLogado'

function Navbar() { 

const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)

const [usuario, setUsuario] = useState<Usuario>({
id: +userId,
nome: '',
usuario: '',
foto: '',
senha: '',
})

async function getUserById(id: number) {
	await buscaId(`/usuarios/${id}`, setUsuario, {
headers: {Authorization: token}
})
}

useEffect(() => {
		getUserById(+userId)
		}, [])

const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
		);

	if(token != ""){
return(
		<>
		<NavbarLogado/>
</>
);
} else {
	return (
			<>
			<AppBar  position="sticky" className="navbar">
			<Toolbar variant="dense">
			<Grid container alignItems='center' justifyContent={'space-between'}>
			<Box style={{ cursor: 'pointer' }}>
			<Typography variant="h5" color="inherit">
			<img className='image-logo' src="https://media.discordapp.net/attachments/1094735432178221206/1113882967891251231/logo_1.png" alt="" style={{ width: '205px', height: '40px' }} />
			</Typography>
			</Box>
			<Box display="flex" alignItems='center' gridGap={20} justifyContent="start">
			<Link  className='reset-link' to='/home'>
			<Box mx={1} style={{ cursor: 'pointer' }}>
			<Typography className='item' variant="subtitle1" color="inherit">
			Inicio 
			</Typography>
			</Box>
			</Link>
			{/*
			<Box mx={1} style={{ cursor: 'pointer' }}>
			<Typography className='item' variant="subtitle1" color="inherit">
			Cestas
			</Typography>
			</Box>
			<Link className='reset-link' to='/loja'>
			<Box mx={1} style={{ cursor: 'pointer' }}>
			<Typography className='item' variant="subtitle1" color="inherit">
			Loja
			</Typography>
			</Box>
			</Link>
			*/}
			<Link className='reset-link' to='/sobre'>
			<Box mx={1} style={{ cursor: 'pointer' }}>
			<Typography className='item' variant="subtitle1" color="inherit">
			Sobre 
			</Typography>
			</Box>
			</Link>
			<Box display='flex'>
			<Link className='reset-link' to='/login'>
			<Box mx={1} style={{ cursor: 'pointer' }}>
			<Button id='btn-login' variant="outlined">Entrar</Button>
			</Box>
			</Link>
	<Link to='/cadastro'>
		<Box mx={1} className='cursor' >
		<Button id='btn-nav' variant="outlined">Criar conta</Button>
		</Box>
		</Link>
		</Box>
		</Box>
		</Grid>
		</Toolbar>
		</AppBar>
		</>
		)
}
}



export default Navbar
