import React, {useEffect} from 'react'
import './Carrinho.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography, Box, Button, Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { removeItem } from '../../store/tokens/actions'
import { TokenState } from '../../store/tokens/tokensReducer'
import {toast} from 'react-toastify'

function Carrinho() {
	  useEffect(() => {
    document.title = 'PeriFeira - Cesta Atual';
  }, []);
  
	let navigate = useNavigate();
	let valor = 0
	const dispatch = useDispatch()
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")
			}
			}, [token])

	const carrinho = useSelector<TokenState, TokenState['produtos']>(
	(state) => state.produtos
	)

	const contagemItens = {};
	carrinho.forEach(item => {
  // Verifique se o item já está no objeto de contagem
  if (contagemItens[item.id]) {
    contagemItens[item.id]++;
  } else {
    contagemItens[item.id] = 1;
  }
});
	const carrinhoUnico = carrinho.filter((item, index) => {
  return carrinho.findIndex(obj => obj.id === item.id) === index;
});

  return (
    <>
      <Grid className='container' justifyContent='center' container>
        <Grid justifyContent='center' className='bg-carrinho' direction='row' item xs={8}>
          <Typography className='text mg-bt-60 bold' align='center' variant='h4'>Cesta atual</Typography>
					
    {carrinhoUnico.map((item, index) => (
      <Box className="cardProduto" display="flex" justifyContent="space-between" key={index}>
        <Grid xs={4} item>
          <Box>
            <img className="image" src={item.foto} alt="" />
            {/* Adicione o badge com a contagem de quantidade */}
            {contagemItens[item.id] && (
              <Badge badgeContent={contagemItens[item.id]}/>
            )}
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Typography className="bold">{item.nome}</Typography>
            <Typography><br/>{item.descricao}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography className="bold">R$ {item.preco.toFixed(2).replace('.', ',')}</Typography>
          </Box>
        </Grid>
      </Box>
    ))}
          <Box className='valor-total' display='flex' justifyContent='space-between'>
            <Box>
              <Typography className='bold mg-bt-20' variant='h5'>Total:</Typography>
            <Button className="btn"
						onClick={() => {
						dispatch(removeItem([]))
						toast.success("Cesta criada")
						navigate("/loja")
						}}
						>Criar sua cesta</Button>
            </Box>
            <Box>
              <Typography className='bold ' variant='h5'>
							{carrinho.map(item=>{valor += item.preco})}R$ {valor.toFixed(2).replace('.', ',')}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Carrinho
