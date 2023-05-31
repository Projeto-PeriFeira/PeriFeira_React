import React from 'react'
import './Carrinho.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, CardMedia, Badge, Container, AppBar, Toolbar, Modal, Typography, Box, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from '../../store/tokens/actions'
import { TokenState } from '../../store/tokens/tokensReducer'
import {toast} from 'react-toastify'

function Carrinho() {
  
	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	const dispatch = useDispatch()

		// function goLogout() {
		// 	dispatch(addToken(''))
		// 		toast.error("Usuario deslogado")
		// 		navigate("/login")
		// }

const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)
  return (
    <>
      <Grid className='container' justifyContent='center' container>
        <Grid justifyContent='center' className='bg-carrinho' direction='row' item xs={8}>
          <Typography className='text mg-bt-60 bold' align='center' variant='h4'>Carrinho de compras</Typography>
        <Box className='cardProduto' display='flex' justifyContent='space-between'>
          <Grid xs={4}  item>
            <Box>
                <img className="image" src="https://boomi.b-cdn.net/wp-content/uploads/2022/06/11-beneficios-do-abacaxi-para-a-saude.png" alt="" />
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
              <Typography>Abacaxi</Typography>
              <Typography>Abacaxi fresquinho</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box>
              <Typography>R$ 5,00</Typography>
            </Box>
          </Grid>
          </Box>
          <Box className='valor-total' display='flex' justifyContent='space-between'>
            <Box>
              <Typography className='bold mg-bt-20' variant='h5'>Total:</Typography>
            <Button className="btn">Finalizar compra</Button>
            </Box>
            <Box>
              <Typography className='bold ' variant='h5'>R$ 5,00</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Carrinho
