import React, {useState, useEffect} from 'react'
import { AppBar, Grid, Avatar, Tab, Tabs, Box, Typography, Stack, Button, Card, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom';
import { TabContext, TabPanel } from '@material-ui/lab';
import './FiltrarProduto.css';

import { Categoria } from '../../../model/Categoria';
import { Produto } from '../../../model/Produto';

import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify'


function FiltrarProduto() {

	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	const [produtos, setProdutos] = useState<Produto[]>([])
	const [categorias, setCategorias] = useState<Categoria[]>([])

	function getProdutos() {
		console.log(token);
		busca('/produtos', setProdutos, {
headers: {
Authorization: token
}
})
}
	function getCategorias() {
		console.log(token);
		busca('/categorias', setCategorias, {
headers: {
Authorization: token
}
})
}

useEffect(() => {
		getProdutos()
		}, [])
useEffect(() => {
		getCategorias()
		}, [])

let [value, setValue] = useState('0')

function handleChange(event: React.ChangeEvent<{}>, newValue: string){
	setValue(newValue);
}

return (
		<>
		{/*<Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>		</Stack>*/}
		<TabContext value={value}>
		<Tabs className="secao2 filtroCategoriaLista" centered onChange={handleChange}>
		{categorias.map(categoria =>(
					<Tab className="filtroCategoria" label={categoria.descricao} value={categoria.id}/>
					))}
		</Tabs>
		<TabPanel value="0" className="secao1">
		<Box marginBottom="68px" />
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
		{
		produtos.map(produto =>(
					<Card	className="filtroProduto">
					<CardMedia
					className="filtroProdutoImagem"
					component="img"
					image={produto.foto}
					/>
					<Box className="filtroProdutoPropriedade">
					<Grid className="filtroProdutoSecao1" container justifyContent="center" alignItems="center">
					<Grid item xs={8}>
					<Typography>
					{produto.categorias?.descricao}
					</Typography>
					</Grid>
					<Grid item xs={4} alignItems="right">
					<Avatar src={produto.usuario?.foto}/>
					</Grid>
					</Grid>
			<Typography className="filtroProdutoNome">
			{produto.nome} unid.
			</Typography>
			<Grid container>
			<Grid xs={6}>
			<Typography className="filtroProdutoPreco">
			R$ {produto.preco}
			</Typography>
			</Grid>
			<Grid xs={6}>
			</Grid>
			</Grid>
					<Typography className="filtroProdutoUsuario">
					Cadastrado por: {produto.usuario?.nome}
					</Typography>
					<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					<Typography noWrap className="filtroProdutoUsuario">
					{produto.descricao}
					</Typography>
					</Box>
					<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar">Comprar</Button>
		</Box>
			</Card>
			))}
			</Stack>
			</TabPanel>
{
	produtos.map(produto =>(
				<TabPanel value={produto.categorias?.id}>
				<Box marginBottom="68px" />
				<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
					<Card	className="filtroProduto">
					<CardMedia
					className="filtroProdutoImagem"
					component="img"
					image={produto.foto}
					/>
					<Box className="filtroProdutoPropriedade">
					<Grid className="filtroProdutoSecao1" container justifyContent="center" alignItems="center">
					<Grid item xs={8}>
					<Typography>
					{produto.categorias?.descricao}
					</Typography>
					</Grid>
					<Grid item xs={4} alignItems="right">
					<Avatar src={produto.usuario?.foto}/>
					</Grid>
					</Grid>
			<Typography className="filtroProdutoNome">
			{produto.nome} unid.
			</Typography>
			<Grid container>
			<Grid xs={6}>
			<Typography className="filtroProdutoPreco">
			R$ {produto.preco}
			</Typography>
			</Grid>
			<Grid xs={6}>
			</Grid>
			</Grid>
					<Typography className="filtroProdutoUsuario">
					Cadastrado por: {produto.usuario?.nome}
					</Typography>
					<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					<Typography noWrap className="filtroProdutoUsuario">
					{produto.descricao}
					</Typography>
					</Box>
					<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar">Comprar</Button>
		</Box>
			</Card>
					</Stack>
					</TabPanel>
					))}
					</TabContext>
					</>
					);
					}
export default FiltrarProduto;
