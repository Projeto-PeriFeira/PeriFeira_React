import React, { useState, useEffect } from 'react'
import './ProdutoIndividual.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography, Stack, Button, Card, CardMedia, Avatar} from '@mui/material'
import { Link } from 'react-router-dom';
import { busca } from '../../services/Service';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
import { Produto } from '../../model/Produto'

function ProdutoIndividual() {

	const [produto, setProduto] = useState<Produto[]>([]);
	const [produtos, setProdutos] = useState<Produto[]>([]);
	const { id } = useParams<{ id: string }>();

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	function getProduto() {
		console.log(token);
		busca('/produtos', setProduto, {
headers: {
Authorization: token
}
})
}

	function getProdutos() {
		console.log(token);
		busca('/produtos', setProdutos, {
headers: {
Authorization: token
}
})
}

	async function getProdutoById(id: string) {
		await busca(`/produtos/${id}`, setProduto , {
headers: {Authorization: token,
}
})
}

useEffect(()=>{
		if(token == ''){
		toast.error("Você precisa estar logado")
		navigate("/login")
		}
		}, [token])

useEffect(() => {
		getProdutoById(id)
		}, [])
useEffect(() => {
		getProdutos()
		}, [])


return (
<>
		<img src={produto.foto} alt="foto do produto" />
		<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
		<Typography padding={'4vh'} variant='h4'>{produto.nome}</Typography>
		<Typography variant="body1">{produto.descricao}</Typography>
		<Typography variant="h6">R${produto.preco}</Typography>

		<Box className="secao2" paddingBottom="50px" />
		<Typography className="titulo secao2" variant="h3" textAlign="center">Outros produtos</Typography>
		<Grid container className="secao1" alignItems='center' justifyContent='center'>
	{produtos.map(produto =>(
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
					))}
</Grid>
</Box>
</>
)
}

export default ProdutoIndividual
