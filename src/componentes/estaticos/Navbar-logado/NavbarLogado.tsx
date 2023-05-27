import React, { useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import "./NavbarLogado.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/actions'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


function NavbarLogado() { 

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	const dispatch = useDispatch()

		function goLogout() {
			dispatch(addToken(''))
				alert("Usuario deslogado")
				navigate("/login")
		}

		const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
		const open = Boolean(anchorEl);
		const handleClick = (event: React.MouseEvent<HTMLElement>) => {
			setAnchorEl(event.currentTarget);
		};
		const handleClose = () => {
			setAnchorEl(null);
		};

	if(token != ""){
		return(
				<>
					<AppBar  position="static" className="navbar">
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
											inicio 
											</Typography>
								</Box>
									</Link>
									<Box mx={1} style={{ cursor: 'pointer' }}>
										<Typography className='item' variant="subtitle1" color="inherit">
										cestas
										</Typography>
									</Box>
									<Link className='reset-link' to='/loja'>
										<Box mx={1} style={{ cursor: 'pointer' }}>
											<Typography className='item' variant="subtitle1" color="inherit">
											loja
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
												<Typography className='item'>Bem-vinde, fulane!</Typography>
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
												<Avatar alt="Remy Sharp" src="" />
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
													<Avatar /> My account
												</MenuItem>
												<Divider />
												<MenuItem onClick={handleClose}>
													<ListItemIcon>
														<PersonAdd fontSize="small" />
													</ListItemIcon>
													Cadastrar produto
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<ListItemIcon>
														<Settings fontSize="small" />
													</ListItemIcon>
													Cadastrar categoria
												</MenuItem>
													<Link className='reset-link'to='/login' onClick={goLogout}>
													<MenuItem onClick={handleClose}>
													<ListItemIcon>
														<Logout fontSize="small" />
													</ListItemIcon>
													Logout
												</MenuItem>
													</Link>
												</Menu>
										</Box>
									{/* <Link to='/lista'>
										<Box mx={1} style={{ cursor: 'pointer' }}>
											<Typography variant="h6" color="inherit">
											lista
											</Typography>
										</Box>
									</Link> */}
									
									</Box>
								</Box>
							</Grid>
						</Toolbar>
					</AppBar>
				</>
				);
	} else {
		return (
				<>
				</>
				)
	}
}



export default NavbarLogado
