import React, { useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Box } from "@material-ui/core";
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
				<AppBar position="static" className="navbar" style={{ backgroundColor: '#F4A460' }}>
				<Toolbar variant="dense">
				<Grid container justifyContent={'space-between'}>
				<Box style={{ cursor: 'pointer' }}>
				<Typography variant="h5" color="inherit">
				<img className='image' src="/src/assets/logo.jpg" alt="" style={{ width: '205px', height: '40px' }} />
				</Typography>

				</Box>
				<Box display="flex" justifyContent="start">
				<Link to='home'>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				inicio 
				</Typography>
				</Box>
				</Link>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				cestas
				</Typography>
				</Box>
				<Link to='loja'>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				loja
				</Typography>
				</Box>
				</Link>
				<Link to='/sobre'>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				Sobre 
				</Typography>
				</Box>
				</Link>
				<Link to='/login'>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				login
				</Typography>
				</Box>
				</Link>
				<Link to='/lista'>
				<Box mx={1} style={{ cursor: 'pointer' }}>
				<Typography variant="h6" color="inherit">
				lista
				</Typography>
				</Box>
				</Link>
				<Box mx={1} className='cursor' onClick={goLogout}>
				<Typography variant="h6" color="inherit">
				logout
				</Typography>
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
