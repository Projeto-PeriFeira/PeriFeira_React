import React, { useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/actions'


function Navbar() { 

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
									<Link className='reset-link' to='/login'>
										<Box mx={1} style={{ cursor: 'pointer' }}>
										<Button id='btn-login' variant="outlined">entrar</Button>
										</Box>
									</Link>
									{/* <Link to='/lista'>
										<Box mx={1} style={{ cursor: 'pointer' }}>
											<Typography variant="h6" color="inherit">
											lista
											</Typography>
										</Box>
									</Link> */}
									<Link to='/cadastro'>
										<Box mx={1} className='cursor' >
										<Button id='btn-nav' variant="outlined">criar conta</Button>
										</Box>
									</Link>
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



export default Navbar
