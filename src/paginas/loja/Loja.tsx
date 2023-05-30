import React, { useEffect } from 'react'
import './Loja.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'

function Loja() {

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")
			return (
			<Grid container justifyContent="center">
			<div className="dot-wave">
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			<div className="dot-wave__dot"></div>
			</div>
			</Grid>
			)
			}
			}, [token])

	return (
			<>
<Box className="secao1" height="427px" textAlign="center">Banner</Box>
			<Box className="secao2" paddingBottom="96px"/>
			<Typography className="titulo secao2" variant="h3" textAlign="center" marginBottom="58" >Loja</Typography>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
			<FiltrarProduto/>
			</Grid>
			<Box className="secao1" paddingBottom="80px"/>
			</>
			)
}
export default Loja	
