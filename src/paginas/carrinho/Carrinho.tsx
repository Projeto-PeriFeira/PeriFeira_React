import { Box, Button, Grid, Typography } from '@material-ui/core'
import './Carrinho.css';
import React from 'react'

function Carrinho() {
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