import React, {useState, useEffect} from 'react'
import { AppBar, Tab, Tabs, Grid, Box, Typography, Stack, Button, Card, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listarProduto/ListarProduto';
import './FiltrarProduto.css';

import Categoria from '../../../model/Produto';
import Produto from '../../../model/Produto';

import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function FiltrarProduto() {
	const [produtos, setProdutos] = useState<Produto[]>([])

		let [value, setValue] = useState('0')

		function handleChange(event: React.ChangeEvent<{}>, newValue: string){
			setValue(newValue);
		}

	const [categorias, setCategorias] = useState<Categoria[]>([])
		let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(()=>{
			if(token == ''){
			alert("Você precisa estar logado")
			navigate("/login")
			}
			}, [token])


	async function getCategoria(){
		await busca("/categorias", setCategorias, {
headers: {
'Authorization': token
}
})
}

async function getProduto() {
	await busca("/produtos", setProdutos, {
headers: {
'Authorization': token
}
})
}

useEffect(()=>{
		getCategoria()
		}, [categorias.length])

useEffect(() => {
		getProduto()
		}, [produtos.length])

return (
		<>
		<TabContext className="secao2" value={value}>
		<AppBar className="listaCategoria">
		<Tabs centered onChange={handleChange}>
		{categorias.map(categoria =>(
					<Tab className="filtroCategoria" label={categoria.descricao} value={categoria.id}/>
					))}
		</Tabs>
		</AppBar>
		<TabPanel value="0">
		<Box marginBottom="68px" />
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
		{
		produtos.map(produto =>(
					<Card	className="filtroProduto">
					<CardMedia
					className="filtroProdutoImagem"
					component="img"
					image="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
					/>
					<Box className="filtroProdutoPropriedade">
					<Typography className="filtroProdutoCategoria">
					{produto.categorias?.descricao}
					</Typography>
					<Typography className="filtroProdutoNome"> 
					{produto.nome}
					</Typography>
					<Typography className="filtroProdutoPreco">
					R$ {produto.preco}
					</Typography>
					<Typography className="filtroProdutoUsuario">
					Cadastrado por: {produto.usuario?.usuario}
					</Typography>
					<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar">Comprar</Button>
					{/*<Grid xs={6} className="filtroProdutoEditar">
						 <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none" >
						 <DeleteIcon scale="1.5"/>
						 </Link>
						 <Link to={`/produtos/${produto.id}`} className="text-decorator-none" >
						 <EditIcon scale="1.5"/>
						 </Link>
						 </Grid>*/}
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
				image="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
				/>
				<Box className="filtroProdutoPropriedade">
				<Typography className="filtroProdutoCategoria">
				{produto.categorias?.descricao}
				</Typography>
				<Typography className="filtroProdutoNome"> 
				{produto.nome}
				</Typography>
				<Typography className="filtroProdutoPreco">
				R$ {produto.preco}
				</Typography>
				<Typography className="filtroProdutoUsuario">
				Cadastrado por: {produto.usuario?.usuario}
				</Typography>
					<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar">Comprar</Button>
					{/*<Grid xs={6} className="filtroProdutoEditar">
						 <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none" >
						 <DeleteIcon scale="1.5"/>
						 </Link>
						 <Link to={`/produtos/${produto.id}`} className="text-decorator-none" >
						 <EditIcon scale="1.5"/>
						 </Link>
						 </Grid>*/}
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
