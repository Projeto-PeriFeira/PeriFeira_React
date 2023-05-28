import React from 'react'
import './Loja.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography } from '@mui/material'
import CadastrarCategoria from '../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'
import CadastrarProduto from '../../componentes/produtos/cadastrarProduto/CadastrarProduto'

function Loja() {
	return (
			<>
<Box className="secao1" height="427px" textAlign="center">Banner</Box>
			<Box className="secao2" paddingBottom="96px"/>
			<Typography className="titulo secao2" variant="h3" textAlign="center" marginBottom="58" >Loja</Typography>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
			<FiltrarProduto/>
			</Grid>
<CadastrarCategoria/>
<CadastrarProduto/>
			</>
			)
}
export default Loja	
