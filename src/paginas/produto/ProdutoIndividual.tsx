import React, { useState, useEffect } from 'react'
import './ProdutoIndividual.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography } from '@mui/material'
import { busca } from '../../services/Service';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
import { Produto } from '../../model/Produto'

function ProdutoIndividual() {

	const [produtos, setProdutos] = useState<Produto[]>([]);
	const { id } = useParams<{ id: string }>();

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	async function getProdutosById(id: string) {
		await busca(`/produtos/${id}`, setProdutos , {
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
		getProdutosById(id)
		}, [])


return (

		<Box>
		<Box className="secao1" height="400px" textAlign="center"   >
		<Grid container display={'flex'} alignItems={'center'} >
		<><Grid xs={4}>
		<img src={produtos.foto} alt="foto do produto" />
		</Grid><Grid xs={6}>
		<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
		<Typography padding={'4vh'} variant='h4'>{produtos.nome}</Typography>
		<Typography variant="body1">{produtos.descricao}</Typography>
		<Typography variant="h6">R${produtos.preco}</Typography>

		</Box>
		</Grid></>
		</Grid>
		</Box>

		<Box className="secao2" paddingBottom="50px" />
		<Typography className="titulo secao2" variant="h3" textAlign="center">Outros produtos</Typography>
		<Grid container className="secao1" alignItems='center' justifyContent='center'>
<FiltrarProduto />
</Grid>
</Box>
)
}

export default ProdutoIndividual
