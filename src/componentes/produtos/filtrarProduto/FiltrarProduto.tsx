import React, {useState, useEffect} from 'react'
import { AppBar, Grid, Avatar, Tab, Tabs, Box, Typography, Stack, Button, Card, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom';
import { TabContext, TabPanel } from '@material-ui/lab';
import './FiltrarProduto.css';

import { Categoria } from '../../../model/Categoria';
import { Produto } from '../../../model/Produto';

import {useNavigate, useParams} from 'react-router-dom';
import { busca, buscaId } from '../../../services/Service';
import { addToCart } from '../../../store/tokens/actions';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify'


function FiltrarProduto() {

	const { id } = useParams<{id: string}>()


		const token = useSelector<TokenState, TokenState["tokens"]>(
				(state) => state.tokens
				);

	const dispatch = useDispatch()

	async function addCarrinho() {
	dispatch(addToCart(produto))
	}

	const [produtos, setProdutos] = useState<Produto[]>([])
		const [produto, setProduto] = useState<Produto>({
id: 0,
nome: '',
descricao: '',
foto: '',
quantidade: 0,
preco: 0,
categorias: null,
usuario: null
})

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
 async function getProdutoId(id: string) {
 try {
 await buscaId(`/produtos/{id}`, setProdutos)
 console.log(produtos)
 } catch(error) {
 console.log(error);
 }
 }

useEffect(() => {
		getProdutos()
		getCategorias()
		}, [])

useEffect(() => {
getProdutoId(id)
		}, [id])

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
		<Box marginBottom="68px" />
		<TabPanel value="0" className="secao1">
		<Stack justifyContent="center"
		flexWrap="wrap" useFlexGap gap="21px" direction={{ xs: 'column', sm: 'row' }}>
		{
		produtos.map(produto =>(
					<Card	className="filtroProduto">
					<CardMedia
					className="filtroProdutoImagem"
					component="img"
					image={produto.foto}
					alt="Foto do produto"
					/>
					<Box className="filtroProdutoPropriedade">
					<Grid className="filtroProdutoSecao1" container justifyContent="center" alignItems="center">
					<Grid item xs={8}>
					<Box width={155} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					<Typography noWrap>
					{produto.categorias?.descricao}
					</Typography>
					</Box>
					</Grid>
					<Grid item xs={4} alignItems="right">
					<Avatar src={produto.usuario?.foto}/>
					</Grid>
					</Grid>
					<Typography className="filtroProdutoNome">
					<Box width={180} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					{produto.nome} unid.
					</Box>
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
						<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
						<Typography noWrap className="filtroProdutoUsuario">
						Cadastrado por: {produto.usuario?.nome}
					</Typography>
						</Box>
						<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
						<Typography noWrap className="filtroProdutoUsuario">
						{produto.descricao}
					</Typography>
						</Box>
						<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar" width="22px">Comprar</Button>
						</Box>
						</Card>
						))}
						</Stack>
						</TabPanel>
{
	produtos.map(produto =>(
				<TabPanel value={produto.categorias?.id}>
				<Box marginBottom="68px" />
		<Stack justifyContent="center"
		flexWrap="wrap" useFlexGap gap="21px" direction={{ xs: 'column', sm: 'row' }}>
				<Card	className="filtroProduto">
				<CardMedia
				className="filtroProdutoImagem"
				component="img"
				image={produto.foto}
				alt="Foto do produto"
				/>
				<Box className="filtroProdutoPropriedade">
				<Grid className="filtroProdutoSecao1" container justifyContent="center" alignItems="center">
				<Grid item xs={8}>
					<Box width={155} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
				<Typography noWrap>
				{produto.categorias?.descricao}
				</Typography>
				</Box>
				</Grid>
				<Grid item xs={4} alignItems="right">
				<Avatar src={produto.usuario?.foto}/>
				</Grid>
				</Grid>
				<Typography className="filtroProdutoNome">
					<Box width={180} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
				{produto.nome} unid.
				</Box>
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
					<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					<Typography noWrap className="filtroProdutoUsuario">
					Cadastrado por: {produto.usuario?.nome}
				</Typography>
					</Box>
					<Box width={200} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
					<Typography noWrap className="filtroProdutoUsuario">
					{produto.descricao}
				</Typography>
					</Box>
					<Button component={Link} to={`/produto/${produto.id}`} className="filtroProdutoComprar">Saiba mais</Button>
					<Button onClick={() => {dispatch(addToCart(produto))}} className="filtroProdutoComprar"><AddShoppingCartSharpIcon/></Button>
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
