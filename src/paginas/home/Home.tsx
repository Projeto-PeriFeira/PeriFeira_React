import React, { useEffect } from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css'
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto';
import Sobre from '../sobre/Sobre';

function Home() {

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")

			}
			}, [token])
	return (
			<>
			{token == "" ? 
			<Grid container justifyContent="center">
			<div className="dot-wave">
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			</div>
			</Grid>
			:
			<Grid container className='caixa' alignItems='center' justifyContent='center'>
				<Grid item xs={4}>
					<Stack flexDirection='column' gap={2}>
						<Box>
						<Typography className='texto1' variant='h2'>Alimentos saudáveis, sustentáveis e acessíveis.</Typography>
						</Box>
						<Box>
						<Button className='botao' variant="contained">Começar</Button>
						</Box>
					</Stack>
				</Grid>
			<Grid item justifyContent='center' xs={4}>

						<img className='image-home' src="/src/assets/Camada 5.png" alt="" />
			</Grid>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29236.87293797743!2d-46.67667661829088!3d-23.654165616745633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5abd1c9c3ff5%3A0xb64ad2f9fa54c2ea!2sZona%20Sul%20de%20S%C3%A3o%20Paulo%20-%20Vila%20Santa%20Catarina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004379-060!5e0!3m2!1spt-BR!2sbr!4v1685552360027!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

				
			</Grid>

			}
			<Sobre/>	
	</>
		);
};
export default Home;
