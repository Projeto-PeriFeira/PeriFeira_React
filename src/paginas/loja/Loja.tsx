import React from 'react'
import './Loja.css'
import CadastrarProduto from '../../componentes/produtos/cadastrarProduto/CadastrarProduto'
import ListarProduto from '../../componentes/produtos/listarProduto/ListarProduto'
import CadastrarCategoria from '../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'
import ListarCategoria from '../../componentes/categorias/listarCategoria/ListarCategoria'
import { Grid, Box, Typography, Stack, Button, Card, CardMedia, CardContent } from '@mui/material'


function Loja() {
	return (
			<>
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>

			<div className="banner">
			<h1>inserir banner</h1>
			</div>

			<div className="secao2">
			<Typography className="titulo">Loja</Typography>
			<Stack className="filtros" direction="row" useFlexGap flexWrap="wrap" spacing={6}>
			<Button className="filtrosCategorias">Cestas</Button>
			<Button className="filtrosCategorias">Frutas</Button>
			<Button className="filtrosCategorias">Legumes</Button>
			<Button className="filtrosCategorias">Verduras</Button>
			<Button className="filtrosCategorias">Hortaliças</Button>
			</Stack>
			</div>
<h1>Lista !</h1>
<ListarCategoria/>
<h1>Lista .</h1>
<CadastrarCategoria/>
<h1>cadastroP !</h1>
<CadastrarProduto/>
<h1>cadastroP .</h1>
<h1>lista !</h1>
<ListarProduto/>
<h1>lista .</h1>
			
			<div className="listaProdutos">
			<Stack spacing={2}>
			 <Card className="produto">
      <CardMedia
				borderRadius="20px"
				height="224"
				position='absolute'
				maxWidth="216"
        component="img"
        image="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
      />
      <CardContent className="conteudoProduto">
        <Typography className="categoriasProduto">
        Frutas
        </Typography>
        <Typography className="nomeProduto"> 
          Manga unid.
        </Typography>
        <Typography className="precoProduto">
				R$ 3,50
        </Typography>
      </CardContent>
    </Card>
		<h1>verificar se tera aulas sobre paginas de produto</h1>
			</Stack>
			</div>
			</>
			)
}
export default Loja	
