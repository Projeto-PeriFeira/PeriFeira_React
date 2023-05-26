import React from 'react'
import './Loja.css'
import CadastrarProduto from '../../componentes/produtos/cadastrarProduto/CadastrarProduto'
import ListarProduto from '../../componentes/produtos/listarProduto/ListarProduto'
import CadastrarCategoria from '../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'
import ListarCategoria from '../../componentes/categorias/listarCategoria/ListarCategoria'
import { Grid, Box, Typography, Stack, Button, Card, CardMedia, CardContent } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Loja() {
	return (
			<>
			<div className="banner">
			<h1>inserir banner</h1>
			</div>

			<div className="secao2">
			<Typography className="titulo">Loja</Typography>
			<Stack className="filtros" direction="row" useFlexGap flexWrap="wrap" spacing={6}>
			<ListarCategoria/>
			</Stack>
			</div>
			<div className="secao2">
<ListarProduto/>
</div>
{/*}<CadastrarCategoria/>
<CadastrarProduto/>*/}
			</>
			)
}
export default Loja	
