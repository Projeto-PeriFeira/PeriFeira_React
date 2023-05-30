import React, { useEffect, useState } from 'react'
import { Grid, AppBar, Modal, Container, Toolbar, Typography, Box, Button, Menu, MenuItem, Avatar } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/actions'
import { toast } from 'react-toastify'
import { buscaId } from '../../../services/Service'
import { Usuario } from '../../../model/Usuario'
import FormularioProduto from '../../../componentes/produtos/cadastrarProduto/CadastrarProduto'
import CadastrarCategoria from '../../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'

function Navbar() { 

const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)
		function goLogout() {
				setModalLogoutOpen(false);
			dispatch(addToken(''))
				toast.error("Usuario deslogado")
				navigate("/login")
		}

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalCadastroProdutoOpen, setModalCadastroProdutoOpen] = useState(false);
  const [modalCadastroCategoriaOpen, setModalCadastroCategoriaOpen] = useState(false);
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
		setModalLogoutOpen(false);
    setModalCadastroProdutoOpen(false);
    setModalCadastroCategoriaOpen(false);
  };

	let navigate = useNavigate();

	const dispatch = useDispatch()


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
		<AppBar  position="sticky" className="navbar">
		<Toolbar variant="dense">
		<Grid container alignItems='center' justifyContent={'space-between'}>
		<Box style={{ cursor: 'pointer' }}>
		<Typography variant="h5" color="inherit">
		<img className='image' src="/src/assets/logo.svg" alt="" style={{ width: '205px', height: '40px' }} />
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
<Link className='reset-link' to='/sobre'>
<Box mx={1} style={{ cursor: 'pointer' }}>
<Typography className='item' variant="subtitle1" color="inherit">
Sobre 
</Typography>
</Box>
</Link>
<Box display='flex' alignItems='center'>
<Box mx={1} style={{ cursor: 'pointer'}}>
<Typography className='item' variant="subtitle1" color="inherit">Bem vinde, {usuario?.nome}!</Typography>
</Box>
<Box mx={1} style={{ cursor: 'pointer'}} onClick={handleMenuOpen}>
<Avatar src={usuario.foto} alt="Foto do usuário" />
</Box>
</Box>
<Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => {{setModalCadastroProdutoOpen(true)}; setAnchorEl(null)}}>Cadastrar Produto</MenuItem>
        <MenuItem onClick={() => {{setModalCadastroCategoriaOpen(true)}; setAnchorEl(null)}}>Cadastrar Categoria</MenuItem>
        <MenuItem onClick={() => {{setModalLogoutOpen(true)}; setAnchorEl(null)}}>Logout</MenuItem>
      </Menu>

      <Modal 
			closeAfterTransition
        BackdropProps={{
          timeout: 5000,
        }}
			open={modalCadastroProdutoOpen} onClose={handleModalClose}>
        <div>
				<FormularioProduto/>
        </div>
      </Modal>
      <Modal open={modalCadastroCategoriaOpen} onClose={handleModalClose}>
			<div>
				<CadastrarCategoria/>
        </div>
      </Modal>
      <Modal open={modalLogoutOpen} onClose={handleModalClose}>
        <div>
	<Box marginBottom="30vh"/>
        <Container maxWidth="sm" className="background-form">
				<Typography className="titulo" variant="h4" textAlign="center">Voce deseja realmente sair?</Typography>
                <Button onClick={goLogout} fullWidth className='btn mg-top' type="submit" variant="contained" color="primary">Sair</Button>
        </Container>
        </div>
      </Modal>
</Box>
</Grid>
</Toolbar>
</AppBar>
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
			<img className='image' src="/src/assets/logo.svg" alt="" style={{ width: '205px', height: '40px' }} />
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
