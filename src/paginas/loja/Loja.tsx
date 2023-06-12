import React, { useEffect } from 'react'
import './Loja.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Loja() {

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")
			// return (
			// <Grid container justifyContent="center">
			// <div className="dot-wave">
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// </div>
			// </Grid>
			// )
			}
			}, [token])

	return (
			<>
			<Carousel showIndicators={false} showArrows={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={3000}>
			<div>
			<img src="https://cdn.discordapp.com/attachments/1093179215907655800/1113157259825004614/banner-1.png" />
			</div>
			<div>
			<img src="https://cdn.discordapp.com/attachments/1093179215907655800/1113157260168925224/banner2.png" />
			</div>
			<div>
			<img src="https://cdn.discordapp.com/attachments/1093179215907655800/1113157260651282544/banner-3.png" />
			</div>
			</Carousel>
			<Box className="secao2" paddingBottom="96px"/>
			<Typography className="titulo secao2" variant="h3" textAlign="center" marginBottom="58" >Loja</Typography>
			<Box marginBottom="58px"/>
			<FiltrarProduto/>
			</>
			)
}
export default Loja	
