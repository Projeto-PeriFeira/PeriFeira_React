import React, { useState, useEffect } from 'react'
import { Grid, Container, AppBar, Toolbar, Modal, Typography, Box, Button } from "@material-ui/core";
import "./NavbarLogado.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { buscaId } from '../../../services/Service'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/actions'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import Logout from '@mui/icons-material/Logout';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Usuario } from '../../../model/Usuario'
import {toast} from 'react-toastify'
import FormularioProduto from '../../../componentes/produtos/cadastrarProduto/CadastrarProduto'
import { addToCart } from '../../../store/tokens/actions';
import CadastrarCategoria from '../../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'


function NavbarLogado() { 

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	const dispatch = useDispatch()

		function goLogout() {
			dispatch(addToken(''))
				toast.error("Usuario deslogado")
				navigate("/login")
		}

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalCadastroProdutoOpen, setModalCadastroProdutoOpen] = useState(false);
  const [modalCadastroCategoriaOpen, setModalCadastroCategoriaOpen] = useState(false);
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);
	const carrinho = useSelector<TokenState, TokenState['produtos']>(
	(state) => state.produtos
	)

  const handleModalClose = () => {
		setModalLogoutOpen(false);
    setModalCadastroProdutoOpen(false);
    setModalCadastroCategoriaOpen(false);
  };
		const open = Boolean(anchorEl);
		const handleClick = (event: React.MouseEvent<HTMLElement>) => {
			setAnchorEl(event.currentTarget);
		};
		const handleClose = () => {
			setAnchorEl(null);
		};
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
let valorTotal = 0

useEffect(() => {
		getUserById(+userId)
		}, [])

		return(
				<>
				carrinho: {carrinho.map((price) => {
				{valorTotal += price.preco}
				})} {valorTotal}
					<AppBar  position="static" className="navbar">
						<Toolbar variant="dense">
							<Grid container alignItems='center' justifyContent={'space-between'}>
								<Box style={{ cursor: 'pointer' }}>
									<Typography variant="h5" color="inherit">
									<img className='image' src={"/src/assets/logo.svg"} alt="" style={{ width: '205px', height: '40px' }} />
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
									<Link className='reset-link' to='/cestas'>
									<Box mx={1} style={{ cursor: 'pointer' }}>
										<Typography className='item' variant="subtitle1" color="inherit">
										Cestas
										</Typography>
									</Box>
									</Link>
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
										<Box display='flex' flexDirection='row' justifyItems='center' alignItems='center' gridGap={4} style={{ cursor: 'pointer' }}>
											<Box>
												<Typography className='item'>Bem-vinde, {usuario.nome}!</Typography>
											</Box>
										<Tooltip title="Account settings">
											<IconButton
												onClick={handleClick}
												size="small"
												// sx={{ ml: 2 }}
												aria-controls={open ? 'account-menu' : undefined}
												aria-haspopup="true"
												aria-expanded={open ? 'true' : undefined}
											>
												<Avatar alt="Foto do usuário" src={usuario.foto} />
											</IconButton>
										</Tooltip>
											<Menu
											anchorEl={anchorEl}
											id="account-menu"
											open={open}
											onClose={handleClose}
											onClick={handleClose}
											PaperProps={{
												elevation: 0,
												sx: {
													overflow: 'visible',
													filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
													mt: 1.5,
													'& .MuiAvatar-root': {
														width: 32,
														height: 32,
														ml: -0.5,
														mr: 1,
													},
													'&:before': {
														content: '""',
														display: 'block',
														position: 'absolute',
														top: 0,
														right: 14,
														width: 10,
														height: 10,
														bgcolor: 'background.paper',
														transform: 'translateY(-50%) rotate(45deg)',
														zIndex: 0,
													},
												},
											}}
												transformOrigin={{ horizontal: 'right', vertical: 'top' }}
												anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
											>
												<MenuItem onClick={handleClose}>
													<Avatar src={usuario.foto} />{usuario.nome}
												</MenuItem>
												<Divider />
												<Link className="reset-link" to='/perfil'>
												<MenuItem>
													<ListItemIcon className="text">
														<ManageAccountsSharpIcon fontSize="small" />
													</ListItemIcon>
													Configurar perfil
												</MenuItem>
												</Link>
												<MenuItem onClick={() => {{setModalCadastroProdutoOpen(true)}; handleClose}}>
													<ListItemIcon className="text">
														<AddBoxOutlinedIcon fontSize="small" />
													</ListItemIcon>
													Cadastrar produto
												</MenuItem>
												<MenuItem onClick={() => {{setModalCadastroCategoriaOpen(true)}; handleClose}}>
													<ListItemIcon className="text">
														<SellOutlinedIcon fontSize="small" />
													</ListItemIcon>
													Cadastrar categoria
												</MenuItem>
													<MenuItem onClick={() => {{setModalLogoutOpen(true)}; handleClose}}>
													<ListItemIcon className="text">
														<Logout fontSize="small" />
													</ListItemIcon>
													Logout
												</MenuItem>
												</Menu>
      <Modal open={modalCadastroProdutoOpen} onClose={handleModalClose}>
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
			</Box>
			</Box>
			</Grid>
			</Toolbar>
			</AppBar>
			</>
			);
			}

export default NavbarLogado
