import React, {useEffect} from 'react'
import './Carrinho.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, CardMedia, Badge, Container, AppBar, Toolbar, Modal, Typography, Box, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { addToken, removeItem } from '../../store/tokens/actions'
import { TokenState } from '../../store/tokens/tokensReducer'
import {toast} from 'react-toastify'

function Carrinho() {
  
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
			// return (
			// <Grid container justifyContent="center">
			// <div className="dot-wave">
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// <div className="dot-wave__dot"></div>
			// </div>
			// </Grid>
			// )
			}
			}, [token])


const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)

	const carrinho = useSelector<TokenState, TokenState['produtos']>(
	(state) => state.produtos
	)
  return (
    <>
      <Grid className='container' justifyContent='center' container>
        <Grid justifyContent='center' className='bg-carrinho' direction='row' item xs={8}>
          <Typography className='text mg-bt-60 bold' align='center' variant='h4'>Cesta atual</Typography>
		{carrinho.map(item => (
        <Box className='cardProduto' display='flex' justifyContent='space-between'>
          <Grid xs={4} item>
            <Box>
                <img className="image" src={item.foto} alt="" />
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
              <Typography>{item.nome}</Typography>
              <Typography>{item.descricao}</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <Typography>R$ {item.preco.toFixed(2).replace('.', ',')}</Typography>
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
